import sys
from amazon import scrape_amazon
from flipkart import scrape_flipkart

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
            print(f"Name:                {item['name']}")
            print(f"Current Price:       ₹{item['price']:,}")
            print(f"Original Price:      ₹{item['originalPrice']:,}")
            print(f"Discount Percentage: {item['discount']}% OFF")
            print(f"Rating:              {item['rating']} Stars")
            print(f"Reviews:             {item['reviewCount']}")
            print(f"Image URL:           {item['image']}")
            print(f"Free Delivery:       {item['freeDelivery']}")
            
    print("\n=========================================")
    print("            FLIPKART RESULTS             ")
    print("=========================================")
    if not flipkart_results:
        print("No results found or request was blocked by Flipkart.")
    else:
        for idx, item in enumerate(flipkart_results, 1):
            print(f"\nResult #{idx}:")
            print(f"Name:                {item['name']}")
            print(f"Current Price:       ₹{item['price']:,}")
            print(f"Original Price:      ₹{item['originalPrice']:,}")
            print(f"Discount Percentage: {item['discount']}% OFF")
            print(f"Rating:              {item['rating']} Stars")
            print(f"Reviews:             {item['reviewCount']}")
            print(f"Image URL:           {item['image']}")
            print(f"Free Delivery:       {item['freeDelivery']}")
            
    print("\n=========================================")
    print("            Scraping Complete            ")
    print("=========================================")

if __name__ == "__main__":
    run_scrapers()