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
            list_containers = soup.find_all("a", class_="k7wcnx")
            grid_containers = soup.find_all("div", class_="bLCLBY")
            
            if list_containers:
                print(f"[Flipkart Scraper] Detected List Layout. Found {len(list_containers)} items.")
                containers = list_containers
                is_list = True
            elif grid_containers:
                print(f"[Flipkart Scraper] Detected Grid Layout. Found {len(grid_containers)} items.")
                containers = grid_containers
                is_list = False
            else:
                print("[Flipkart Scraper] No standard product containers found on page.")
                return []

            
            for card in containers:
                
                title = "Title not found"
                if is_list:
                    title_el = card.find(class_="RG5Slk")
                    if title_el:
                        title = title_el.get_text().strip()
                else:
                    
                    brand_el = card.find(class_="Fo1I0b")
                    desc_el = card.find(class_="atJtCj")
                    brand = brand_el.get_text().strip() if brand_el else ""
                    desc = desc_el.get_text().strip() if desc_el else ""
                    if brand and desc:
                        title = f"{brand} - {desc}"
                    elif desc:
                        title = desc
                    elif brand:
                        title = brand

                
                if title == "Title not found" or not title:
                    img_el = card.find("img")
                    if img_el and img_el.get("alt"):
                        title = img_el.get("alt").strip()

                
                discounted_price = "Price not found"
                price_el = card.find(class_="hZ3P6w") 
                if price_el:
                    discounted_price = price_el.get_text().strip()

                
                original_price = "Original price not found"
                orig_price_el = card.find(class_="kRYCnD") 
                if orig_price_el:
                    original_price = orig_price_el.get_text().strip()

                
                discount_percentage = "Discount not found"
                discount_el = card.find(class_="HQe8jr") 
                if discount_el:
                    discount_percentage = discount_el.get_text().strip()
                else:
                    
                    discount_text_el = card.find(string=re.compile(r"%\s*(off|Off)"))
                    if discount_text_el:
                        discount_percentage = discount_text_el.strip()

                
                rating = "Rating not found"
                
                rating_el = card.find(class_=re.compile(r"(MKiFS6|CjyrHS)"))
                if rating_el:
                    rating = rating_el.get_text().strip()
                else:
                    
                    for el in card.find_all(True):
                        text = el.get_text().strip()
                        if re.match(r"^[1-5]\.[0-9]$", text):
                            rating = text
                            break

                
                image_url = "Image not found"
                img_el = card.find("img")
                if img_el:
                    image_url = img_el.get("src") or img_el.get("data-src") or "Image not found"
                    if image_url.startswith("//"):
                        image_url = "https:" + image_url

               
                results.append({
                    'title': title,
                    'discounted_price': discounted_price,
                    'original_price': original_price,
                    'discount_percentage': discount_percentage,
                    'rating': rating,
                    'image_url': image_url
                })
                
                
                if len(results) >= 5:
                    break
                    
            return results

    except Exception as e:
        print(f"[Flipkart Scraper] An error occurred: {e}")
        return []

