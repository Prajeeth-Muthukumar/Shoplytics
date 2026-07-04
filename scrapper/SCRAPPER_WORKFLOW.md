# 🕷️ Shoplytics Web Scraper (Data Engine)

Welcome to the Shoplytics Scraper! This standalone folder is the data engine of our project. It uses **Python**, **BeautifulSoup4**, and **Playwright** to navigate e-commerce sites (like Amazon and Flipkart), bypass basic bot-detection, extract product prices, and send that data to our Django API.

---

## 🚀 How to Run the Scraper Locally

Because we rely on heavy external libraries like Playwright, we must use a **Virtual Environment (`venv`)** to keep these installations from clashing with the Django backend or your computer's global Python settings.

### Step 1: Navigate to the folder
Make sure your terminal is actually inside the scraper directory!
```
cd scraper
```

### Step 2: Create a Virtual Environment (First time only)
If you don't see a venv folder inside the scraper directory, you need to generate one.
```
python -m venv venv
```

### Step 3: Activate the Virtual Environment (CRITICAL)
You must do this EVERY TIME you open a new terminal to work on the scraper! When activated, you will see (venv) appear at the very left of your terminal prompt.
```
.\venv\Scripts\activate
```

### Step 4: Install Dependencies
Download the required Python scraping libraries (like beautifulsoup4, playwright, and requests) into your virtual environment.
```
pip install -r requirements.txt
```

### Step 5: Install Playwright Browsers (First time only!)
⚠️ CRITICAL STEP: Even though you installed the Playwright Python library in Step 4, Playwright physically cannot work until it downloads its own special versions of Chromium, Firefox, and WebKit to use for "headless" browsing. Run this command once:
```
playwright install
```

### Step 6: Run the Scraper
Once everything is installed, you can run the main scraping script. (Make sure you follow any command-prompt instructions the script asks for, like entering a product name!)
```
python main.py
```

## 📁 Scraper Guidelines & Best Practices
To ensure our scrapers don't get permanently IP-banned by Amazon or Flipkart, please adhere to these rules when writing code in this folder:

1. Always use Headless Mode in Production: While debugging locally, setting headless=False in Playwright is great so you can watch the browser move. However, before committing your code, make sure it works with headless=True!
1. Use Delays: Never fire 100 requests a second. Use random time.sleep(2) delays between page loads so our bot acts like a human.
1. Data Destination: The final step of any scraping script in this folder should not just be print(price). It should use the requests library to package that data as JSON and POST it to our Django API endpoint!