from django.http import JsonResponse

from .scraper.amazon import scrape_amazon
from .scraper.flipkart import scrape_flipkart

def get_product(request):
    product_query = request.GET.get('q', '')
    if not product_query:
        return JsonResponse({"error": "No product query provided. Use ?q=productname"}, status=400)
    try:
        amazon_data = scrape_amazon(product_query)
        flipkart_data = scrape_flipkart(product_query)
        return JsonResponse({
            "status": "success",
            "query": product_query,
            "results": {
                "amazon": amazon_data,
                "flipkart": flipkart_data
            }
        })
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)