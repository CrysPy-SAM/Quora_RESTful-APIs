const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    { username: "satyam!", content: "I Love Coding!" },
    { username: "Ravi!", content: "Go and achieve your goal!" }, // Fixed spelling of 'achieve'
    { username: "Divya", content: "You can do anything you want!" } // Fixed grammar
];

// Route to display all posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// Route to show form for a new post
app.get("/posts/new", (req, res) => {
    res.render("new");
});

// Route to handle new post submission
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    
    // Validation: Ensure both fields have values
    if (!username || !content) {
        return res.send("Both username and content are required.");
    }

    posts.push({ username, content });
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
