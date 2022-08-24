const express = require('express');
const path = require('path');
const port =8000;


const app = express();

//setting view engine
app.set('view engine','ejs');
//setting path from views folder
app.set('views',path.join(__dirname,'views'));
//middle ware to get data from req and res
app.use(express.urlencoded());
//contains all static css, html, js files
app.use(express.static('assets'))



// //middle are
// app.use(function(req,res,next){
//     console.log('Adding Myname key to req data', req.myName)
//     // req.myName = "Aman";
//     console.log("middle ware 1 called");
//     next();
// });


// app.use(function(req,res,next){
//     console.log("midd 2");
//     req.myName = "Aman";
//     // console.log('Adding Myname key to req data', req.myName)
//     next();
// })



contactList = [
    {
        name : "aman",
        phone : "97283434534"
    },
    {
        name : "Rohan",
        phone : "23453245346"
    },
    {
        name : "John",
        phone : "34564536457"
    }
]



app.get('/',function(req,res){

    return res.render('home',{
        t:"My contacts List",
        contact_list : contactList
    });
});

app.get('/practice',(req,res)=>{
    return res.render('practice',{
        t:'Let us play'
    });
});


app.post('/create-contact',(req,res)=>{
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    });
    return res.redirect('/')
    // return res.redirect('back')
});

//delete contact from list
app.get('/delete-contact/:phone',function(req,res){
    let phone =  req.params.phone;
    //contact is for iteration over contactList
    let contactIndex = contactList.findIndex(contact => contact.phone == phone)
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }

    return res.redirect('back')
})



app.listen(8000,(err)=>{
    if(err){
        console.log("Error while running the server",err);
        return;
    }
    console.log("Server is running on port", port)
});