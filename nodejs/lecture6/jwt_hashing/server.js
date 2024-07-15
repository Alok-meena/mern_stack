const express = require("express"); // Importing the Express module
const fs = require("fs"); // Importing the File System module
const path = require("path"); // Importing the Path module
const jwt = require("jsonwebtoken"); // Importing the JSON Web Token module
const bcrypt = require("bcrypt"); // Importing the bcrypt module

const app=express();
const port=3000;
const secret_key="kese_ho_bhai_jonney";

app.use(express.json());

const userfilePath=path.join(__dirname,"users.json");

const writeJsonFile=(filepath,data)=>{
    fs.writeFileSync(filepath,JSON.stringify(data,null,2));//null and 2 to give proper format
}

//to apni json file ka data pahle ham users me dal rhe then baki data usme add kr rhe hai
//ham bar bar nya array bna rhe the to element push krne se pahle file ka sara data diya
const readJsonFile=(filepath)=>{
    const data=fs.readFileSync(filepath,"utf8");
    return JSON.parse(data);//yha json.parse kiya becaue data ko karna tha
    //string fomat me tha to fir se parse kr diya hai to convert to json format again
}

//api to register

const authMiddleware=(req,res,next)=>{
    const token=req.headers["authorization"];//to ye bs headers ka sara part utha lega 
    if(!token){
        res.status(401).json({ message: "Access denied" });
    }
    try{
        // The jwt.verify function will return the decoded payload of the JWT if the token is valid. 
        
        const decode = jwt.verify(token.split(" ")[1],secret_key);//and ye token ko uthayega
        //jo bearer ke bad hoga
        console.log(decode);  
        req.user=decode;
        next();
    }
    catch (err){
        res.status(400).json({message:"Invalid token"});
    }
}

app.post("/api/auth/register", async (req,res)=>{
    const { username,password }=req.body;
    // const users=[];
    const users=readJsonFile(userfilePath);//tp uper jab code tha to hmara data save nhi ho rha tha 
    //because hm hr bar ek nya array bna ke usme data save kr rhe the

    if(users.find((user)=>user.username===username)){
        res.status(404).json({error:"user already exists"});
    }

    const hashedPassword=await bcrypt.hash(password,10);//to 2 power 10 time encrypt krega
    //so hashing is used to save data

    users.push({username,password:hashedPassword});//to ye apna jo password hai use BCRYPT alag hi format me hash krke dedega
    //ager username diff hai aor password same to bhi bcrypt dono ko alag format me krega
    //ex $2b$10$ul3f4KAeJWCmsnAX9PiqCOU4r5I1/YpaQsTx2Z8KbpOHdh4s8Hiam this is hashed password
    //and the password can be compared only by bcrypt library we can't do it it is difficult for us
    
    writeJsonFile(userfilePath,users);
    res.status(200).json({message:"user registered sucessfully"});
})

app.post("/api/auth/login", async (req,res)=>{
    const { username,password }=req.body;
    const users=readJsonFile(userfilePath);
    const user=users.find((user)=>user.username===username);

    //to yha tk to hmane sara data utha liye hai  and
    //if user does not exist or our and saved password doesn't match return error

    // Check if user exists and if the password is correct
    if(!user || !(await bcrypt.compare(password,user.password))){//used to compare hasehed password with entered password during login
       return res.status(404).json({error:"Invalid Cred"});
    }

  // Create a JWT token
    const token=jwt.sign({username},secret_key,{expiresIn:"1h"});
    res.json({token});//it will return the token 
    //when we decode it on site it will give the details stored in it
})

app.get("/api/protected",authMiddleware,(req,res)=>{
    res.json({message:"This is a protected route",user:req.user});
})
app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000/");
})


IMP:-----------------

Bcrypt: When you need to store passwords securely in your database
    
Salt rounds (or cost factor) determine the complexity of the hashing algorithm.
Higher salt rounds mean more time and computational power are needed to generate the hash,
making it more secure but also slower.

    
JWT: When you need to create a token for user authentication and session management.



The bcrypt.compare function is a part of the bcrypt library in Node.js, and it is used to
compare a plain-text password with a hashed password. This function is essential for 
verifying a user's password during the login process.



jwt.sign()

The jwt.sign function is a part of the jsonwebtoken library in Node.js. It is used to create a JSON Web Token (JWT),
which can be used for securely transmitting information between parties, commonly for authentication purposes.


    this is what is required to use it 


const jwt = require('jsonwebtoken');

// Define the payload
const payload = {
  id: 1,
  username: 'exampleUser'
};

// Define the secret key
const secretKey = 'yourSecretKey';

// Define options (optional)
const options = {
  expiresIn: '1h', // Token will expire in 1 hour
  issuer: 'yourApp' // Issuer of the token
};

// Create the token
const token = jwt.sign(payload, secretKey, options);

console.log(token); // This will log the generated JWT

why secret key is rquired
In summary, the secret key is required for:

Signing the JWT to ensure its integrity.
Verifying the JWT to confirm its authenticity.
Protecting against tampering and forgery by keeping the key secure.
Using a strong and confidential secret key is critical for maintaining the security of JWT-based authentication systems.

and EVERYTIME WE DO IT THE TOKEN WILL BE DIFFERENT EITHER FOR THE SAME DATA ALSO AND 
HAS EXPIRY Time  


Yes, the payload in a JWT contains information about the user or the context of the token. This information is structured

like
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "role": "admin"
}


The jwt.verify function is part of the jsonwebtoken library in Node.js and is used to
verify the authenticity and integrity of a JSON Web Token (JWT). 


const jwt = require('jsonwebtoken');

// Token to verify
const token = 'your.jwt.token.here';
const secretKey = 'yourSecretKey';

jwt.verify(token, secretKey, (err, decoded) => {//so jwt.verify() hme decoded data dega aor isme
    //token and se.k dono dete hai to match them
    if (err) {
        console.error('Token is not valid:', err);
        // Handle token error (e.g., expired, malformed)
    } else {
        console.log('Decoded payload:', decoded);
        // Token is valid; proceed with application logic
    }
});

it works like this


TO JO REQ.USER KIYA HAI USER KI JAGAH KHCUH AOR BHI USE KR SKTE THE

Yes, exactly! When you assign req.variable = decode, all the decoded values from the JWT payload are stored in req.variable.
This allows you to access all the information contained in the token throughout your application,
particularly in subsequent middleware or route handlers.




//to starting me npm start then apna nodemon start ho jayega and after updating the code
//no need to run the server again and again
