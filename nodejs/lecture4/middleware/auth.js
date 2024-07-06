//to isme ham function export krte hai to yha () arrow function return kr diya hai
module.exports=(req,res,next)=>{
    const authHeader=req.headers["authorization"];//req.headers kiya to include all headers
    console.log(authHeader);
    if(authHeader && authHeader.startsWith("Bearer")){
        const token=authHeader.split(" ")[1];//to ye xxxx ko utha lega mtlb space ke bad ke text ko
        if(token=="xxxx"){
            return next();//to ager password correct hai to next() kiya so go in api logic
        }
    }
    res.status(401).send("WHO ARE YOU?");
}
