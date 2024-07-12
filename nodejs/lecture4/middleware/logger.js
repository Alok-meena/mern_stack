//MIDDLEWARE IS MOSTLY WRITTEN FOR AUTHENTICATION AND LOGIN 


module.exports=(req,res,next)=>{
    console.log("API----->>>",req.method,req.url);//to method bhejega like get/post/put and url name bhejega
    //it is req.url type of api means url return krega
    //and req.method is used to console.log the api which is called
    next();//mtlb ki middleware is completed and go ahead
}

//or if we want to export it like a function the do like this------>>>
// const logger=()=>{
//     console.log("API ---->>>",req.method,req.url);
//     next();
// }

// module.exports={logger};
