const express=require("express");
const app=express();
const axios=require("axios");
const path=require("path");
const port=3000;
const apikey="471e8972";


Make sure your folder structure looks something like this to include the image


bash
Copy code
/your-project
│
├── /public
│   ├── movie.jpg
│
├── index2.html
└── server.js


// app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//do this to include the image
app.use(express.urlencoded({ extended: true }));

//means while / api called load the webpage here
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index2.html"));
})//yha async use nhi kiya bs vhi pe karna jha output aane me time lge

//ab apni search api bnayenge

//so search ko click krne pe ye search vali api call ho rhi hai


Fetching Data from APIs:
When making HTTP requests, reading/writing files asynchronously, or performing database operations, use async and await.
    
app.get("/search",async (req,res)=>{

    //to suno suno jab query params me ham niche likhte the to uper link apne ap update hota tha
    //like this ki search?name==alok | id=2 ese to yha jese name hai 
    //hmne query diya to bs use hi uthaya hai
    const name=req.query.query;//because html me dekho hmne search?query hi diya hai
    const response=await axios.get("http://www.omdbapi.com/",{ //omd is open movie database
        params:{
            apikey:apikey,
            s:name,
        },
    });
    return res.status(200).json(response.data);
})


ESA HAI ISLIYE hi ham site me params krke pahle to api key and then method how to search bhej rhe hai

Send all data requests to:

http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:

http://img.omdbapi.com/?apikey=[yourkey]&

//YE TO HAMNE AXIOS KO USE KRKE INKI API KO CALL KIYA HAI AOR DATA UTHAYA HAI 

//so params me ham id se bhi search kr skte the but ham to name se hi kr rhe hai
// const fun=async ()=>{// TO YE ARROW FUNCTION THAT TO ASYNC () CALL KRNE KE PAHLE LIKHNA Hai
//     const response= await axios.get("http://www.omdbapi.com/",{
//         params:{
//             apikey:apikey,
//             s:"Ghatak",//so inhone inki website pe btaya hai ki for search s dalna pdega
//         },
//     });
//     console.log(response.data);
// };
// fun();

app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000");
});
