# ⚙️ Shoplytics Backend (API & Database)

Welcome to the Shoplytics Backend! This part of the project is built using **Python**, **Django**, and the **Django REST Framework**.

Its primary job is to act as an invisible vault: it receives data from the Python Scraper, saves it to the Database, and sends that data to the Next.js Frontend.

## 🛠️ How it was initialized
For context, the core server was scaffolded using Django's built-in command line tools:
*   `django-admin startproject config .` (Created the main server settings)
*   `python manage.py startapp api` (Created the specific folder where we write our database models and API logic)

---

## 🚀 How to Run the Backend Locally

Because everyone has different versions of Python installed on their computers, you **cannot** just install packages globally. We must use a **Virtual Environment (`venv`)** to create an isolated "bubble" for this project.

### Step 1: Navigate to the folder
Make sure your terminal is actually inside the backend directory!
```
cd backend
```

### Step 2: Create a Virtual Environment (First time only)
If you don't see a venv folder inside the backend directory, you need to generate one.
```
python -m venv venv
```

### Step 3: Activate the Virtual Environment (CRITICAL)
You must do this EVERY TIME you open a new terminal to work on the backend! When activated, you will see (venv) appear at the very left of your terminal prompt.
```
.\venv\Scripts\activate
```

### Step 4: Install Dependencies
Because venv is in our .gitignore file, the actual library code is not uploaded to GitHub. You must tell Python to read the requirements.txt file and download the required packages (like Django) into your virtual environment.
```
pip install -r requirements.txt
```

### Step 5: Update the Database (Migrations)
If another teammate changed the database structure (e.g., added a new field to the Product model), you must run this command to update your local SQLite database to match theirs.
```
python manage.py migrate
```

### Step 6: Start the Server
Once everything is installed and migrated, you can boot up the Django server:
```
python manage.py runserver
```
The server will now be listening for API requests at http://127.0.0.1:8000/

## 📁 Folder Structure Guide
### To keep our Python code organized, Django forces us to separate our code into "Projects" and "Apps":

- config/ (The Project): This folder contains the global settings for the entire server. You will rarely write code here, except for adding things to settings.py or the master urls.py.

- api/ (The App): This is where 99% of your work will happen!
    - models.py: Where we design our Database tables.
    - views.py: Where we write the logic for our API endpoints.
    - admin.py: Where we register our database so we can view it in the browser.

- db.sqlite3: Your local, personal testing database. This file is ignored by Git, so you can fill it with dummy data without messing up your teammates' databases!