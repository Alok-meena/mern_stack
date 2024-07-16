const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");
const port = 3000;
const secret_key="this_is_a_key";

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

const usersFilepath = path.join(__dirname, "users.json");

// Page for signup
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Page for login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

const writeJsonFile = (filepath, data) => {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
};

const readJsonFile = (filepath) => {
    try {
        const data = fs.readFileSync(filepath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("ERROR READING USERS DATA:", err);
        return [];
    }
};

// Signup
app.post("/api/auth/signup", async (req, res) => {
    const { username, password, email, phone } = req.body;
    const users = readJsonFile(usersFilepath);
    if (users.find((user) => user.username === username)) {
        res.status(404).send("User Already Exists!");
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword, email, phone });
        writeJsonFile(usersFilepath, users);
        res.send(`
            <div style="
                padding: 2em; 
                margin: 2em auto; 
                border: 1px solid #ccc; 
                border-radius: 10px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
                max-width: 500px; 
                background-color: #f9f9f9;
                font-family: Arial, sans-serif;
                text-align: center;">
                <strong style="
                    font-size: 2.5rem; 
                    color: #4CAF50;
                    display: block; 
                    margin-bottom: 1em;">
                    User Registered Successfully!!!
                </strong>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Username:</strong> ${username}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Password:</strong> ${password}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Email:</strong> ${email}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Phone:</strong> ${phone}
                </p>
            </div>
        `);
    }
});

// Login
app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    const users = readJsonFile(usersFilepath);
    const registered_User = users.find((user) => user.username === username);

    if (!registered_User || !(await bcrypt.compare(password, registered_User.password))) {
        res.status(404).send("Invalid Credentials");
    } else {
        const token = jwt.sign({ username }, secret_key, { expiresIn: "1h" });
        res.send(`
            <div style="
                padding: 2em; 
                margin: 2em auto; 
                border: 1px solid #ccc; 
                border-radius: 10px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
                max-width: 500px; 
                background-color: #f9f9f9;
                font-family: Arial, sans-serif;
                text-align: center;">
                <strong style="
                    font-size: 2.5rem; 
                    color: #4CAF50;
                    display: block; 
                    margin-bottom: 1em;">
                    Login Successful!!!
                </strong>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Username:</strong> ${username}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333; 
                    word-wrap: break-word;">
                    <strong>Token:</strong> ${token}
                </p>
            </div>
        `);
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/signup`);
});
