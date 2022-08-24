
var userLoggedIn = true;
// var promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         if(userLoggedIn)
//             resolve();
//         else{
//             reject();
//         }
//     },1000);
// });

// setTimeout(()=>{
//     userLoggedIn = false;
// },500)


// promise
//     .then(()=>{
//     console.log("Set timeout completed")
//     })
//     .catch(()=>{
//         console.log("Rejected")
//     })


// var promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         if(userLoggedIn)
//             resolve("User loggedIn");
//         else{
//             reject();
//         }
//     },1000);
// });


// function checkUser(){
//     var promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(userLoggedIn)
//                 resolve("User loggedIn");
//             else{
//                 reject();
//             }
//         },1000);
//     });
//     return promise
// }

// setTimeout(()=>{
//     userLoggedIn = true;
// },500)

 
// checkUser().then((msg)=>{
//     console.log(msg)
// }).catch(()=>{
//         console.log("Rejected")
// })

//wrap promsises in function


let userLeft = false;
let userWatchingMeme = true;

function currentlyWatching(){
    return new Promise((resolve,reject) =>{
        if(userLeft){
            reject({
                name: 'User Left',
                message : ':('
            })
        }
        else if (userWatchingMeme){
            reject({
                name :'User watching meme',
                message : 'You are wasting time on memes'
            })
        }else{
            resolve("Doing good keep it up")
        }
    })
}

currentlyWatching().then((message)=>{
    console.log(message)
}).catch((error) =>{
    console.log(error.message)
})





