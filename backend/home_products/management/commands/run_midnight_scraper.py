from django.core.management.base import BaseCommand
from home_products.scheduler import scrape_top_products

class Command(BaseCommand):
    help = 'Instantly runs the midnight scraper to update the Top 15 Products'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.WARNING('Bypassing the clock... running scraper instantly!'))
        scrape_top_products()
        
        self.stdout.write(self.style.SUCCESS('Successfully updated the database!'))