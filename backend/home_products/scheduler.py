from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from scraper.amazon import scrape_amazon
from scraper.flipkart import scrape_flipkart
from .models import TopProduct

PRODUCTS_TO_TRACK = [
    {"rank": 1, "query": "iPhone 15 Pro Max", "category": "Smartphone", "emoji": "📱"},
    {"rank": 2, "query": "Samsung Galaxy S24 Ultra", "category": "Smartphone", "emoji": "📱"},
]

def scrape_top_products():
    print("[Scheduler] Starting midnight scrape...")
    
    for item in PRODUCTS_TO_TRACK:
        print(f"Scraping {item['query']}...")
        
        amazon_results = scrape_amazon(item['query'])
        flipkart_results = scrape_flipkart(item['query'])
        
        best_amazon = amazon_results[0] if amazon_results else None
        best_flipkart = flipkart_results[0] if flipkart_results else None
        
        winner = None
        if best_amazon and best_flipkart:
            winner = best_amazon if best_amazon['price'] <= best_flipkart['price'] else best_flipkart
        elif best_amazon: winner = best_amazon
        elif best_flipkart: winner = best_flipkart
            
        if winner:
            print(f"Winner for {item['query']} is {winner['store']} at ₹{winner['price']}")
            
            TopProduct.objects.update_or_create(
                rank=item['rank'],
                defaults={
                    'name': item['query'],
                    'image': winner['image'],
                    'emoji': item['emoji'],
                    'price': winner['price'],
                    'oldPrice': winner['originalPrice'],
                    'discount': winner['discount'],
                    'store': winner['store'],
                    'category': item['category'],
                }
            )

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    
    scheduler.add_job(
        scrape_top_products,
        trigger="cron",
        hour=0,
        minute="*",
        id="midnight_scraper",
        replace_existing=True,
    )
    register_events(scheduler)
    scrape_top_products()
    scheduler.start()
    print("Background Scheduler Started!")