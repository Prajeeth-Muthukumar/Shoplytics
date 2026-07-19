from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import re

def scrape_amazon(search_term):
    print(f"\n[Amazon Scraper] Searching for: '{search_term}' using Playwright...")
    
    url = f"https://www.amazon.in/s?k={search_term.replace(' ', '+')}"
    
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = context.new_page()
            page.goto(url, wait_until="domcontentloaded")
            page.wait_for_timeout(2000) 
            html = page.content()
            browser.close()
            soup = BeautifulSoup(html, 'html.parser')
            
            results = []
            items = soup.find_all('div', {'data-component-type': 's-search-result'})
            
            for index, item in enumerate(items):
                # 1. Name
                title_element = item.find('h2')
                if title_element:
                    name = title_element.text.strip()
                else:
                    continue
                    
                # 2. Price (Converted to Number)
                price = 0
                price_container = item.find('span', class_='a-price')
                if price_container:
                    price_element = price_container.find('span', class_='a-offscreen')
                    if price_element:
                        raw_price = price_element.text.strip()
                        clean_price = re.sub(r'[^0-9.]', '', raw_price)
                        if clean_price: price = int(float(clean_price))
                
                # 3. Original Price (Converted to Number)
                originalPrice = price
                orig_price_container = item.find('span', class_='a-text-price')
                if orig_price_container:
                    orig_price_element = orig_price_container.find('span', class_='a-offscreen')
                    if orig_price_element:
                        raw_orig = orig_price_element.text.strip()
                        clean_orig = re.sub(r'[^0-9.]', '', raw_orig)
                        if clean_orig: originalPrice = int(float(clean_orig))
                
                # 4. Discount (Converted to Number)
                discount = 0
                discount_element = item.find(string=re.compile(r'%\s*off', re.IGNORECASE))
                if discount_element:
                    raw_discount = discount_element.strip().strip('()')
                    clean_discount = re.sub(r'[^0-9]', '', raw_discount)
                    if clean_discount: discount = int(clean_discount)
                
                # 5. Rating (Converted to Float)
                rating = 4.5
                rating_element = item.find('span', class_='a-icon-alt')
                if rating_element:
                    raw_rating = rating_element.text.strip()
                    match = re.search(r'([0-9.]+)', raw_rating)
                    if match: rating = float(match.group(1))
                
                # 6. Review Count (Scraping the actual number of reviews!)
                reviewCount = "0"
                review_element = item.find('span', class_='s-underline-text')
                if review_element:
                    reviewCount = review_element.text.strip()
                
                # 7. Image URL
                image = "Image not found"
                img_element = item.find('img', class_='s-image')
                if img_element and img_element.get('src'):
                    image = img_element.get('src')
                    
                results.append({
                    'id': f"amazon-{index}",
                    'name': name,
                    'image': image,
                    'rating': rating,
                    'reviewCount': reviewCount,
                    'price': price,
                    'originalPrice': originalPrice,
                    'discount': discount,
                    'store': 'amazon',
                    'freeDelivery': True
                })
                
                if len(results) >= 5:
                    break
                    
            return results

    except Exception as e:
        print(f"[Amazon Scraper] An error occurred: {e}")
        return []