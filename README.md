# Project Title
# Quora RESTful API

A **Node.js** and **Express**-based RESTful API that enables users to create, view, and manage posts dynamically. This project follows the **MVC architecture** and uses **EJS** for templating along with static file serving.

## 🚀 Features
- View all posts
- Submit new posts
- Dynamic rendering using **EJS**
- Static file serving via Express
- Modular and scalable code structure

## 📂 Project Structure
```
/Quora_RESTful-APIs
│── /views               # EJS templates
│   ├── index.ejs        # Displays all posts
│   ├── new.ejs          # Form for new posts
│── /public              # Static assets (CSS, images)
│── index.js             # Main server file
│── package.json         # Project dependencies
│── package-lock.json    # Lock file for dependencies
```

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/CrysPy-SAM/Quora_RESTful-APIs.git
cd Quora_RESTful-APIs
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
node index.js  # or use 'nodemon index.js' for automatic reloading
```

### 4️⃣ Access the App
Open your browser and visit:
[http://localhost:8080/posts](http://localhost:8080/posts)

## 🔧 API Endpoints
| Method | Endpoint       | Description           |
|--------|--------------|-----------------------|
| `GET`  | `/posts`     | Retrieve all posts    |
| `GET`  | `/posts/new` | Render form for new post |
| `POST` | `/posts`     | Submit a new post     |

## 📦 Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **EJS** - Templating engine
- **Body-parser** - Middleware for form data handling

## 📜 License
This project is licensed under the **MIT License**.

## 👨‍💻 Author
Developed by **CrysPy-SAM**. Contributions and suggestions are always welcome!

## 📌 Contribution
If you'd like to contribute:
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Make your changes and commit them
4. Push the changes and create a pull request

## ✅ Next Steps: Push README to GitHub
```sh
git add README.md
git commit -m "Added a detailed README file"
git push origin main
```

---
🚀 **Happy Coding!**

