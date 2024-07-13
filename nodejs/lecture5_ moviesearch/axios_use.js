const axios=require("axios");
async function makeApiCalls(){
    const getResponse1=await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            //jaise yha jo ye params me bheja hai na vo apne link me add ho jayega jo ham normally query params me krte the na vese hi to get that particular value
            //isiliye yha comma lga ke use kiya hai
            params:{
                id:1,
            },
        }
    );

    //to jaise hamne ye data bheja to ye site ki last ki next id pe bnke print kr liya but site pe show nhi hoga
    const postResponse2=await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            titl e:"something",
            body:"something",
            userId:10,
        }
    );




    
    //body={
            // title:"something",
            // body:"something",
            // userId:10,
    // }
    // const postResponse2=await axios.post("https://jsonplaceholder.typicode.com/posts",body);
    
    console.log(postResponse2.data);
}

makeApiCalls();



HERE WE CAN ALSO USE THEN AND CATCH TO CATCH THE ERROR IF DATA IS NOT PRINTED OR ANY OTHER ERROR

try {
    let data = JSON.parse(someJSONString);
    console.log(data);
} catch (error) {
    console.error('Invalid JSON string:', error);
}


someAsyncFunction()
    .then(result => {
        // Handle the result
        console.log(result);
    })
    .catch(error => {
        // Handle the error
        console.error('An error occurred:', error);
    });



