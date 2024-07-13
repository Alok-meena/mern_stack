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
