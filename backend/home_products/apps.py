from django.apps import AppConfig
import os

class TopProductsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'home_products'

    def ready(self):
        from . import scheduler
        scheduler.start()