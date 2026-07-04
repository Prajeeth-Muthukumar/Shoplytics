# 🚀 Shoplytics Team Git Workflow

Welcome to the Shoplytics repository! Because there are 4 of us working on this project simultaneously, it is critical that we follow this exact Git workflow to prevent merge conflicts and lost code.

## ⚠️ The Golden Rule
**NEVER write code or commit directly to the `main` branch.** 
The `main` branch must always contain working, unbroken code. All new work must be done on a separate "feature branch".

---

## 📥 1. Initial Setup (First time only)
If you haven't downloaded the code to your computer yet, open your terminal and run:
```
git clone https://github.com/Prajeeth-Muthukumar/Shoplytics.git
cd Shoplytics
```

---
## 2. The Daily Workflow (Do this EVERY time you sit down to code)
### Step 1: Get the latest updates
#### Make sure you are on the main branch
> git checkout main

#### How to Find Which Branch You are In: 
> git branch

#### Download the latest updates from the team
> git pull


### Step 2: Create a new branch for your task
#### The -b creates the branch and switches you to it instantly
> git checkout -b feature/your-task-name

#### Examples:
```
git checkout -b feature/amazon-scraper
git checkout -b feature/search-ui
```

### Step 3: Write your code!
#### Open VS Code, write your code, test it locally, and make sure it works.

### Step 4: Save (Commit) your changes
#### When your feature is complete and working, stage and commit your files. #### Write a clear, descriptive message so the team knows exactly what you changed.

#### Stage all changed files

> git add .

#### Package them with a message

> git commit -m "feat: added the horizontal product card component"

### Step 5: Push your branch to GitHub
#### Now you need to upload your specific branch to the internet. (Note: Because this is a new branch, you must use the -u origin flag the very first time you push it).

> git push -u origin feature/your-task-name

## 🤝 3. The Code Review (Pull Request)
### Once you have pushed your branch:

- Go to our repository on GitHub.com.
- You will see a green button that says Compare & pull request. Click it!
- Leave a brief description of what you built.
- Click Create pull request.
- Wait for at least one other team member to look at your code and click Merge.
- Once it is merged, your code is officially part of Shoplytics! You can then go back to your terminal, run git checkout main, run git pull, and start your next task!