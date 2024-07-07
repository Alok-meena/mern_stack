const axios=require("axios");
async function makeApiCalls(){
    const getResponse1=await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            params:{
                id:1,
            },
        }
    );
    
    const postResponse2=await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            titl e:"something",
            body:"something",
            userId:10,
        }
    );
    console.log(postResponse2.data);
}

makeApiCalls();
