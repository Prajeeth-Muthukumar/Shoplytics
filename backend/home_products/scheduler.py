from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from scraper.amazon import scrape_amazon
from scraper.flipkart import scrape_flipkart
from .models import TopProduct

PRODUCTS_TO_TRACK = [
    {"rank": 1, "query": "iPhone 17 Pro Max", "category": "Smartphone", "emoji": "📱"},
    {"rank": 2, "query": "Samsung Galaxy S26 Ultra", "category": "Smartphone", "emoji": "📲"},
    {"rank": 3, "query": "Nothing Phone (4)", "category": "Smartphone", "emoji": "⚪"},
    {"rank": 4, "query": "OnePlus 15", "category": "Smartphone", "emoji": "🔴"},
    {"rank": 5, "query": "Google Pixel 10 Pro", "category": "Smartphone", "emoji": "🌐"},
    {"rank": 6, "query": "MacBook Air M5", "category": "Laptop", "emoji": "💻"},
    {"rank": 7, "query": "AirPods Pro 3", "category": "Audio", "emoji": "🎧"},
    {"rank": 8, "query": "Sony WH-1000XM6", "category": "Audio", "emoji": "🎵"},
    {"rank": 9, "query": "Nintendo Switch 2", "category": "Gaming", "emoji": "🎮"},
    {"rank": 10, "query": "PlayStation 5 Slim", "category": "Gaming", "emoji": "🕹️"},
    {"rank": 11, "query": "Apple Watch Ultra 3", "category": "Wearable", "emoji": "⌚"},
    {"rank": 12, "query": "Samsung Galaxy Watch 8", "category": "Wearable", "emoji": "⌚"},
    {"rank": 13, "query": "iPad Air M4", "category": "Tablet", "emoji": "📟"},
    {"rank": 14, "query": "Dyson Airwrap", "category": "Appliance", "emoji": "💨"},
    {"rank": 15, "query": "Kindle Paperwhite (2026)", "category": "E-Reader", "emoji": "📖"},
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
        minute=0,
        id="midnight_scraper",
        replace_existing=True,
    )
    register_events(scheduler)
    scheduler.start()
    print("Background Scheduler Started!")