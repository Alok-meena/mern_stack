//promises


let correct=false;

function fakeDownloadPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(correct){
                resolve("SUCCESS");
            }
            else{
                reject(new Error("GOT AN ERROR"));
            }
        },1000);
    });
}

// let data=fakeDownloadPromise();
// console.log(data);

// fakeDownloadPromise().then(function(data){
//     console.log("THE DATA IS DOWNLOADED");
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

let downloaded=fakeDownloadPromise();
downloaded.then((data)=>console.log(data));
downloaded.catch((err)=>console.log(err));
