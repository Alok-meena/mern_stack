module.exports=(req,res,next)=>{
    const authHeader=req.headers["authorization"];//req.headers kiya to include all headers
    console.log(authHeader);
    if(authHeader && authHeader.startsWith("Bearer")){
        const token=authHeader.split(" ")[1];//to ye xxxx ko utha lega mtlb space ke bad ke text ko
        if(token=="xxxx"){
            return next();
        }
    }
    res.status(401).send("WHO ARE YOU?");
}
