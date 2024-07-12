const express=require("express");
const app=express();
const axios=require("axios");
const path=require("path");
const port=3000;
const apikey="471e8972";

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index2.html"));
})

//ab apni search api bnayenge

//so search ko click krne pe ye search vali api call ho rhi hai
app.get("/search",async (req,res)=>{
    const name=req.query.query;//because html me delhi hmne search?query hi diya hai
    const response=await axios.get("http://www.omdbapi.com/",{ //omd is open movie database
        params:{
            apikey:apikey,
            s:name,
        },
    });
    return res.status(200).json(response.data);
})

// const fun=async ()=>{
//     const response= await axios.get("http://www.omdbapi.com/",{
//         params:{
//             apikey:apikey,
//             s:"Ghatak",
//         },
//     });
//     console.log(response.data);
// };
// fun();

app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000");
});
