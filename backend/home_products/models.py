from django.db import models

class TopProduct(models.Model):
    rank = models.IntegerField(unique=True) 
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=500)
    emoji = models.CharField(max_length=10, blank=True)
    price = models.IntegerField()
    oldPrice = models.IntegerField()
    discount = models.IntegerField()
    store = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    
    # A hidden field to track exactly when the midnight scraper last updated this row
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"#{self.rank} - {self.name}"