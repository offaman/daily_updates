const dbOperation = require('./dbOperation')
const express = require('express')
const bodyParser = require('body-parser') 
const app = express();
const urlencoded  = require('express');
const logger = require('./logger');
const router = express.Router();
const validate = require('./validate')
const studentInfo = require('./StudentModel')

app.use(urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);


router.route('/studentInfo').get(async(request,response)=>{
    await dbOperation.getStudentInfo().then(result =>{
        response.send(result)
    }).catch((err)=>{
        logger.log('error',err)
    })
})


router.route('/studentInfo/:id').get((request,response)=>{
    dbOperation.getStudentInfoById(request.params.id).then(result =>{
        response.send(result)
    }).catch((err) => {
        logger.log('error',err)
    })
})


router.route('/addStudentInfo').post((request,response)=>{
        let info = request.body
        console.log(info)
        try{
            validate.validate(info)
            const infoToAdd = new studentInfo(info)
            dbOperation.insertStudent(infoToAdd).then(result =>{
                response.send(result)
            }).catch((err)=>{
                logger.log('error',err)
            })
    } catch(error){
        console.log(error)
        logger.log('error',error)
    }
})


router.route('/delete/:id').post((request,response)=>{
    dbOperation.deleteStudent(request.params.id).then(result =>{
        response.send(result)
    }).catch((err)=>{
        logger.log('error',err)
    })
})


router.route('/update/:id').post((request,response)=>{
    let info = request.body
    try{
            validate.validate(info)//validation
            const infoToUpdate = new studentInfo(info)//model studentInfo
            dbOperation.updateStudentInfo(infoToUpdate).then(result =>{
                response.send(result)
            }).catch((err)=>{
                logger.log('error',err)
            })
    }catch(error){
        logger.log('error',error)
    }
})



var port = 8000;
app.listen(port)
console.log('API is running at '+port)