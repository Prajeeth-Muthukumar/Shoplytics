# 🎨 Shoplytics Frontend

Welcome to the Shoplytics Frontend! This part of the project is built using **Next.js** (App Router) and **Tailwind CSS**.

## 🛠️ How it was initialized
For context, this project was instantly scaffolded using the `npx` (Node Package Execute) tool. Instead of manually downloading and configuring dozens of React libraries, we used this command to fetch the latest Next.js template from the internet, install it, and discard the setup script:
`npx create-next-app@latest .`

---

## 🚀 How to Run the Frontend Locally

Because we use `.gitignore` to hide the massive `node_modules` folder (which contains 300MB of library code), you **cannot** just download the code and run the server immediately. You must install the dependencies first.

### Step 1: Navigate to the folder
Make sure your terminal is actually inside the frontend directory!
```
cd frontend
```

### Step 2: Install Dependencies (CRITICAL)
#### You must run this command the first time you download the project, AND anytime a teammate adds a new package. This command reads the package.json file, connects to the internet, and downloads all the exact packages required to run the website.
```
npm install
```

### Step 3: Start the Development Server
#### Once the installation is complete, you can start the local Next.js server:
```
npm run dev
```

### Step 4: View the Website
#### Once the server boots up, you can view the website in two ways:

#### On your computer: Open your browser and go to http://localhost:3000
#### On your cell phone (Mobile Testing): Look at your terminal output for the Network URL (e.g., http://192.168.x.x:3000). As long as your phone is on the same Wi-Fi as your computer, you can type that URL into your phone's browser to test the mobile design!

## 📁 Folder Structure Guide
### To keep our code organized and prevent Git Merge Conflicts, please stick to this structure:

#### src/app/: This is where our actual webpages live. The name of the folder dictates the URL endpoint (e.g., src/app/search/page.jsx becomes shoplytics.com/search). *page.jsx* will be the content of that particular URL endpoint.

#### src/components/: This is our global component library. Any reusable UI piece (like a ProductCard, Button, or Navbar) should be created here so anyone on the team can import and use it on their pages!
#### src/app/globals.css: This is our Tailwind configuration file where we define our custom @theme colors (like shoplytics-primary).

## 🎨 Tailwind CSS
### We are using Tailwind CSS for all styling. Please do not write standard CSS files. If you need to find a class name, use the Tailwind CSS IntelliSense VS Code extension, or search the [Tailwind Documentation](https://tailwindcss.com/docs/installation/using-vite).