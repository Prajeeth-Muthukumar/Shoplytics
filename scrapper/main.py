from amazon import scrape_amazon

def run_scrapers():
    print("=========================================")
    print("       Welcome to Shoplytics Scraper     ")
    print("=========================================")
    
    search_term = input("Enter the product you want to search for: ")
    
    amazon_results = scrape_amazon(search_term)
    
    print("\n--- AMAZON RESULTS ---")
    if not amazon_results:
        print("No results found or request was blocked by Amazon.")
    else:
        for idx, item in enumerate(amazon_results, 1):
            print(f"\nResult #{idx}:")
            print(f"Title: {item['title']}")
            print(f"Price: {item['price']}")
            
    print("\n=========================================")
    print("            Scraping Complete            ")
    print("=========================================")

if __name__ == "__main__":
    run_scrapers()