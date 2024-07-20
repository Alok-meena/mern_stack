const express=require("express");//this is for our api's

//Yes, the http module is built into Node.js. It allows you to create an HTTP server and handle HTTP requests and responses. 
//http is required to create backend for socket io 
const http=require("http");
const socketIo=require("socket.io");
//only .models as serverjs kisi folder me nhi hai aor kisi foler me jana ho to use . o.w if ham kisi folder me hai aor kisi aor me jana
//hai to use ../models

//to yha ./models/db karna db ko includ o/w error
const {sequelize,User,Message}=require("./models/db.js");//ek sath import kr liya 
const authRoutes=require("./routes/auth");
const jwt=require("jsonwebtoken");
const app=express();


//ham server chla rhe hai for socket io and jo ye server create hoga vo app se hoga
//to ye server hmara dono ke liye chal jayega app.listen nhi karna pdega 
//and socket io ke liye bhi chal jayega
const server=http.createServer(app);
const io = socketIo(server);


app.use(express.json());
//Static files are assets that are sent to the client's browser without any modification or processing on the server side. These files are typically used for the frontend of a web application and 
//jaise ham html page ko direct run kr rhe hai sever pe without processing it
//so these types of fils are static files


//to sabhi files ko like index.html inko run krne ke liye ham sendfile krte the 
//but yha pe 2nd method use kiya hai sab khcuh public me dal ke automatically run kiya hai
app.use(express.static("public"));
app.use("/auth",authRoutes);

//now use io / hamne jo F.E me token diya tha ham usse connect kr rhe hai
io.use(async (socket,next)=>{
    const token=socket.handshake.auth.token;//to jo F.E me auth diya tha hamne usse connect kr rhe hai
    try{
        //connect hone ke bad verity ki token correct hai ya nhi 
        const payload=jwt.verify(token,"secret");//jo secret auth me diya tha vhi yha dena hai
        socket.user=await User.findByPk(payload.id);//to auth me id di thi usse hi find kr rhe hai
        next();//used as type of middleware ki ager yha tk ho gya to aage jao
    }
    catch(err){
        next(new Error("Auth Err"));
    }
})

//when we get something jab koi hmare socket se connect hua so used io.socket
io.on("connection",(socket)=>{
    console.log(`User ${socket.user.username} Connected`);//connection bna to user connect ho gya hai

    //to ager F.E se B.E pe koi bhi message aaya ager then save it in db and send message from db(emit)
    socket.on("message",async(text)=>{
        const message=await Message.create({text,userId:socket.user.id});//saving message in db using sequelize
        io.emit("message",{text:message.text,user:socket.user.username});//sending message by formatting in a order 
    });
});

server.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000/");
})



// "dependencies": {
//     "axios": "^1.7.2",
//     "bcrypt": "^5.1.1",
//     "bcryptjs": "^2.4.3", is similar to bcrypt
//     "express": "^4.19.2",
//     "jsonwebtoken": "^9.0.2",
//     "mysql2": "^3.10.3",
//     "sequelize": "^6.37.3",
//     "socket.io": "^4.7.5"
//   },
//   "devDependencies": {
//     "nodemon": "^3.1.4"
//   }
