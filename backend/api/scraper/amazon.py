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
            
            for item in items:
                title_element = item.find('h2')
                if title_element:
                    title = title_element.text.strip()
                else:
                    continue
                    
                discounted_price = "Price not found"
                price_container = item.find('span', class_='a-price')
                if price_container:
                    price_element = price_container.find('span', class_='a-offscreen')
                    if price_element:
                        discounted_price = price_element.text.strip()
                
                original_price = "Original price not found"
                orig_price_container = item.find('span', class_='a-text-price')
                if orig_price_container:
                    orig_price_element = orig_price_container.find('span', class_='a-offscreen')
                    if orig_price_element:
                        original_price = orig_price_element.text.strip()
                
                discount_percentage = "Discount not found"
                discount_element = item.find(string=re.compile(r'%\s*off', re.IGNORECASE))
                if discount_element:
                    discount_percentage = discount_element.strip().strip('()')
                
                rating = "Rating not found"
                rating_element = item.find('span', class_='a-icon-alt')
                if rating_element:
                    rating = rating_element.text.strip()
                
                image_url = "Image not found"
                img_element = item.find('img', class_='s-image')
                if img_element and img_element.get('src'):
                    image_url = img_element.get('src')
                    
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
        print(f"[Amazon Scraper] An error occurred: {e}")
        return []