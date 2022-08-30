const dbOperation = require('./dbOperation')
const express = require('express')
const bodyParser = require('body-parser') 
const app = express();

const urlencoded  = require('express');
const logger = require('./logger');
const router = express.Router();

app.use(urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);


router.route('/studentInfo').get((request,response)=>{

    dbOperation.getStudentInfo().then(result =>{
        response.send(result)
        logger.info("Fetching successfull")
    }).catch((err)=>{
        logger.log('error',err)
    })

})



router.route('/studentInfo/:id').get((request,response)=>{
    dbOperation.getStudentInfoById(request.params.id).then(result =>{
        response.send(result)
        logger.info("Fetching successfull")
    }).catch((err) => {
        logger.log('error',err)
    })
})


router.route('/addStudentInfo').post((request,response)=>{
    let info = request.body
    dbOperation.insertStudent(info).then(result =>{
    }) .catch((err)=>{
        logger.log('error',err)
    })
})


router.route('/delete/:id').post((request,response)=>{
    dbOperation.deleteStudent(request.params.id).then(result =>{
        response.send(result)
        logger.info("Deletion successfull")
    }).catch((err)=>{
        logger.log('error',err)
    })
})


router.route('/update/:id').post((request,response)=>{
    let info = request.body
    dbOperation.updateStudentInfo(info).then(result =>{
        response.send(result)
        logger.info("Updation successfull")
    }).catch((err)=>{
        logger.log('error',err)
    })
})



var port = 8000;
app.listen(port)
console.log('API is running at '+port)



