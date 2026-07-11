import sys
from amazon import scrape_amazon
from flipkart import scrape_flipkart

# Attempt to configure console output to UTF-8 to handle currency symbols (like ₹) on Windows without crashing
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass

def run_scrapers():
    print("=========================================")
    print("       Welcome to Shoplytics Scraper     ")
    print("=========================================")
    
    search_term = input("Enter the product you want to search for: ")
    
    # 1. Scrape Amazon
    amazon_results = scrape_amazon(search_term)
    
    # 2. Scrape Flipkart
    flipkart_results = scrape_flipkart(search_term)
    
    print("\n=========================================")
    print("             AMAZON RESULTS              ")
    print("=========================================")
    if not amazon_results:
        print("No results found or request was blocked by Amazon.")
    else:
        for idx, item in enumerate(amazon_results, 1):
            print(f"\nResult #{idx}:")
            print(f"Title: {item['title']}")
            print(f"Price: {item['price']}")
            
    print("\n=========================================")
    print("            FLIPKART RESULTS             ")
    print("=========================================")
    if not flipkart_results:
        print("No results found or request was blocked by Flipkart.")
    else:
        for idx, item in enumerate(flipkart_results, 1):
            print(f"\nResult #{idx}:")
            print(f"Title:               {item['title']}")
            print(f"Discounted Price:    {item['discounted_price']}")
            print(f"Original Price:      {item['original_price']}")
            print(f"Discount Percentage: {item['discount_percentage']}")
            print(f"Rating:              {item['rating']}")
            print(f"Image URL:           {item['image_url']}")
            
    print("\n=========================================")
    print("            Scraping Complete            ")
    print("=========================================")

if __name__ == "__main__":
    run_scrapers()