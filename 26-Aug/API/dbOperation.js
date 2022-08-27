const config = require('./config')
const mssql = require('mssql');
const { response } = require('express');

async function getStudentInfo(){
    try{
        const pool = await mssql.connect(config);
        let info = await pool.request().query('select * from StudentDetails')
        return info.recordsets;
    }catch(error){
        console.log(error)
    }
}



async function getStudentInfoById(studentId){
    try{
        const pool = await mssql.connect(config);
        let info = await pool.request()
        .input('std',mssql.NVarChar,studentId)
        .query(`select * from [dbo].[StudentDetails] where StudentId = @std`)
        return info.recordsets;
    }catch(error){
        console.log(error)
    }
}


async function insertStudent(order){
    try{
        const pool = await mssql.connect(config);
        let insertStud = await pool.request()
        .input('Id',mssql.NVarChar,order.StudentId)
        .input('name',mssql.NVarChar,order.StudentName)
        .input('GPA',mssql.Float,order.GPA)
        .input('Branch', mssql.NVarChar,order.Branch)
        .input('section',mssql.NVarChar,order.Section)
        .execute('insertIntoStudentDetails');
    }catch(error){
        console.log(error)
    }
}


async function deleteStudent(studentId){
    try{
        const pool = await mssql.connect(config);
        const id = await pool.request()
        .input('StudentId',mssql.NVarChar,studentId)
        .query(`delete from [dbo].[StudentDetails] where StudentId = @StudentId`)
    }
    catch(err){
        console.log(err)
    }
}


async function updateStudentInfo(studentIdwithInfo){
    try{
        const pool = await mssql.connect(config);
        let updateStud = await pool.request()
        .input('Id',mssql.NVarChar,studentIdwithInfo.StudentId)
        .input('name',mssql.NVarChar,studentIdwithInfo.StudentName)
        .input('GPA',mssql.Float,studentIdwithInfo.GPA)
        .input('Branch', mssql.NVarChar,studentIdwithInfo.Branch)
        .input('section',mssql.NVarChar,studentIdwithInfo.Section)
        .query(`update [dbo].[StudentDetails] set StudentName = @name ,GPA = @GPA ,Branch = @Branch , Section = @section where StudentId = @Id` )
    }
    catch(err){
        console.log(err)
    }
}


module.exports ={
    getStudentInfo: getStudentInfo,
    getStudentInfoById : getStudentInfoById,
    insertStudent : insertStudent,
    deleteStudent : deleteStudent,
    updateStudentInfo : updateStudentInfo
}

