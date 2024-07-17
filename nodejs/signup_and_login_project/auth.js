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

// page for update
app.get("/update", (req, res) => {
    res.sendFile(path.join(__dirname, "update.html"));
});



const {writeJsonFile,readJsonFile,authMiddleware}=require("./functions");



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
app.post("/api/auth/login",async (req, res) => {
    const { username, password } = req.body;
    const users = readJsonFile(usersFilepath);
    const registered_User = users.find((user) => user.username === username);

    if (!registered_User || !(await bcrypt.compare(password, registered_User.password))) {
        res.status(404).send("Invalid Credentials");
    } else {
        //to bs registered user se details fetch kr li hai
        const email=registered_User.email;
        const phone=registered_User.phone;
        const token = jwt.sign({ username }, secret_key, { expiresIn: "1h" });
        res.status(201).send(`
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

//to bs ham jo bhi user login kr rhe hai fir uska toekn bna rhe hai and then singup ke
//alva jitni bhi api hai usme ham toekn pass krenge

app.post("/api/auth/update",async (req,res)=>{
    const {username,currentPassword,newPassword,newEmail,newPhone}=req.body;

    const users = readJsonFile(usersFilepath);
    const registered_User = users.find((user) => user.username === username);
    if(!registered_User || !(await bcrypt.compare(currentPassword,registered_User.password))){
        res.status(404).send("Invalid Credentials");
    }
    else{
        const updatedUser = {
            username,
            password: await bcrypt.hash(newPassword, 10),
            email: newEmail,
            phone: newPhone
        };

        const updatedUsers = users.map((user) =>
            user.username === username ? updatedUser : user
        );

        writeJsonFile(usersFilepath, updatedUsers);
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
                    User Details Updated Successfully!!!
                </strong>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Username:</strong> ${username}
                </p>
                 <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Password:</strong> ${newPassword}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Email:</strong> ${newEmail}
                </p>
                <p style="
                    font-size: 1.2rem; 
                    color: #333;">
                    <strong>Phone:</strong> ${newPhone}
                </p>
            </div>
         `);
    }
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/signup`);
});
