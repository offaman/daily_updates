const dbOperation = require('./dbOperation')
const express = require('express')
const bodyParser = require('body-parser') 
const app = express();

const { urlencoded, response } = require('express');
const { request } = require('http');
var router = express.Router();

app.use(urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);

//middleware

router.use((request,response,next)=>{
    console.log("middleware")
    next();
})

router.route('/studentInfo').get((request,response)=>{

    dbOperation.getStudentInfo().then(result =>{
        // console.log(result)
        response.json(result[0]);
    }) 

})


router.route('/studentInfo/:id').get((request,response)=>{
    dbOperation.getStudentInfoById(request.params.id).then(result =>{
        response.json(result);
    }) 

})


router.route('/addStudentInfo').post((request,response)=>{
    let info = {...request.body};
    dbOperation.insertStudent(info).then(result =>{
        response.send("Data inserted");
    }) 

})


router.route('/delete/:id').post((request,response)=>{
    dbOperation.deleteStudent(request.params.id).then(result =>{
        response.send("Successfully deleted")
    })
})


router.route('/update/:id').post((request,response)=>{
    let info = {...request.body};
    dbOperation.updateStudentInfo(info).then(result =>{
        response.send("Successfully updateed")
    })
})






var port = 8000;
app.listen(port)
console.log('API is running at '+port)



