const dbOperation = require('./dbOperation')
const express = require('express')
const bodyParser = require('body-parser') 
const app = express();
const urlencoded  = require('express');
const logger = require('./logger');
const router = express.Router();
const studentInfo = require('./StudentModel');


app.use(urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',router);


router.route('/studentInfo').get(async(request,response,next)=>{
    if(Object.keys(request.query).length != 0){
        next();
    }
    await dbOperation.getStudentInfo().then(result =>{
        response.send(result)
    }).catch((err)=>{
        logger.log('error',err)
    })
})

router.route('/studentInfo').get((request,response)=>{
    let page = parseInt(request.query.page)
    let limit = parseInt(request.query.limit)
    //assign first record is page  is less than or equal to 0
    if(page <=0){
        response.send(`Invalid page! Page number start from 1`)
    }
    //assign limit as 1 if limit is -ve or 0
    if(limit <=0){
        response.send(`Invalid limit! Page number start from 1`)
    }
    dbOperation.getStudentInfo().then((result) =>{
        const allRecordsArray = (result[0]) //recordset is array inside array
        //if page is out of range then assign it to last page acc to limit
        const possibleNumberofPages = Math.ceil((allRecordsArray.length)/limit)
        if(page >possibleNumberofPages){
            response.send(`Invalid page! Maximum ${possibleNumberofPages} pages possible`)
        }

        const recordNumberToStart = (page-1) * limit
        const recordLimit = limit * page;
        const filteredRecords = allRecordsArray.slice(recordNumberToStart,recordLimit)
        response.send(filteredRecords)
    }).catch((err) => {
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

// router.route('/addStudentInfo').post( validate.isValidate, validate.validatorResult, (request,response)=>{
//     let info = request.body;
//     console.log(validate.validateInfo(info))
//     try{
//         const infoToUpdate = new studentInfo(info)
//         dbOperation.insertStudent(infoToUpdate).then(result =>{
//         response.send(result)
//         }).catch((error)=>{
//             logger.log(error)
//         })
//     } catch(error){
//     logger.log('error',error)
// }
// })

router.route('/addStudentInfo').post((request,response)=>{
        let info = request.body;
        try{
            const infoToUpdate = new studentInfo(info)
            dbOperation.insertStudent(infoToUpdate).then(result =>{
            // response.send(request.body)
            }).catch((error)=>{
                logger.log(error)
            })
        } catch(error){
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
            const infoToUpdate = new studentInfo(info)//model studentInfo
            dbOperation.updateStudentInfo(infoToUpdate).then(result =>{
                response.send(result)
            }).catch((err)=>{
                logger.error('error',err)
            })
    }catch(error){
        logger.error('error',error)
    }
})

var port = 8000;
app.listen(port)
console.log('API is running at '+port)