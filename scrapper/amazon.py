from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup

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
                    
                price_container = item.find('span', class_='a-price')
                
                if price_container:
                    price_element = price_container.find('span', class_='a-offscreen')
                    if price_element:
                        price = price_element.text.strip()
                    else:
                        price = "Price not found"
                else:
                    price = "Price not found"
                    
                results.append({
                    'title': title,
                    'price': price
                })
                
                if len(results) >= 5:
                    break
                    
            return results

    except Exception as e:
        print(f"[Amazon Scraper] An error occurred: {e}")
        return []