from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import re

def scrape_flipkart(search_term):
    print(f"\n[Flipkart Scraper] Searching for: '{search_term}' using Playwright...")
    url = f"https://www.flipkart.com/search?q={search_term.replace(' ', '+')}"
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = context.new_page()
            page.goto(url, wait_until="domcontentloaded")
            page.wait_for_timeout(3000) 
            html = page.content()
            browser.close()
            
            soup = BeautifulSoup(html, 'html.parser')
            results = []
            
            containers = soup.find_all("div", {"data-id": True})
            
            if not containers:
                print("[Flipkart Scraper] No standard product containers found on page.")
                return []
            
            for index, card in enumerate(containers):
                
                # 2. Extract Name
                name = "Title not found"
                img_el = card.find("img")
                if img_el and img_el.get("alt"):
                    name = img_el.get("alt").strip()
                else:
                    # Fallback if image alt is missing
                    texts = [t.strip() for t in card.stripped_strings if len(t.strip()) > 10]
                    if texts: name = texts[0]

                # 3. Extract Prices (Find all text with a Rupee symbol)
                price = 0
                originalPrice = 0
                prices = [t.strip() for t in card.stripped_strings if '₹' in t]
                
                if len(prices) > 0:
                    clean_price = re.sub(r'[^0-9.]', '', prices[0])
                    if clean_price: price = int(float(clean_price))
                    originalPrice = price # default to same if no discount
                    
                if len(prices) > 1:
                    clean_orig = re.sub(r'[^0-9.]', '', prices[1])
                    if clean_orig: originalPrice = int(float(clean_orig))

                # 4. Extract Discount (Converted to Integer)
                discount = 0
                discount_text = card.find(string=re.compile(r"%\s*(off|Off)"))
                if discount_text:
                    raw_discount = discount_text.strip().strip('()')
                    clean_discount = re.sub(r'[^0-9]', '', raw_discount)
                    if clean_discount: discount = int(clean_discount)

                # 5. Extract Rating (Converted to Float)
                rating = 4.5
                rating_text = card.find(string=re.compile(r"^[1-5]\.[0-9]$"))
                if rating_text:
                    clean_rating = re.search(r'([0-9.]+)', rating_text.strip())
                    if clean_rating: rating = float(clean_rating.group(1))

                # 6. Extract Review Count 
                # (Flipkart puts reviews in parentheses right next to the rating usually)
                reviewCount = "0"
                review_text = card.find(string=re.compile(r"^\([0-9,]+\)$"))
                if review_text:
                    reviewCount = review_text.strip().strip('()')
                elif rating_text:
                    # Fallback: grab the very next string after the rating!
                    next_text = rating_text.find_next(string=True)
                    if next_text and next_text.strip().startswith('('):
                        reviewCount = next_text.strip().strip('()')

                # 7. Extract Image URL
                image = "Image not found"
                if img_el:
                    image = img_el.get("src") or img_el.get("data-src") or "Image not found"
                    if image.startswith("//"):
                        image = "https:" + image
               
                # 8. Package it beautifully to match your React component!
                results.append({
                    'id': f"flipkart-{index}",
                    'name': name,
                    'image': image,
                    'rating': rating,
                    'reviewCount': reviewCount,
                    'price': price,
                    'originalPrice': originalPrice,
                    'discount': discount,
                    'store': 'flipkart',
                    'freeDelivery': True
                })
                
                if len(results) >= 5:
                    break
                    
            return results

    except Exception as e:
        print(f"[Flipkart Scraper] An error occurred: {e}")
        return []