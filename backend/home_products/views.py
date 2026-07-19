from django.http import JsonResponse
from .models import TopProduct

def get_top_products(request):
    # Pull all 15 products from the database, perfectly sorted by their rank!
    products = TopProduct.objects.all().order_by('rank')
    
    # Package them up into a list
    data = []
    for product in products:
        data.append({
            'id': product.rank,
            'rank': product.rank,
            'name': product.name,
            'image': product.image,
            'emoji': product.emoji,
            'price': product.price,
            'oldPrice': product.oldPrice,
            'discount': product.discount,
            'store': product.store,
            'category': product.category,
        })
        
    # Send them to the frontend instantly
    return JsonResponse({'results': data})