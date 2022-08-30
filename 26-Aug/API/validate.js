module.exports.validate = function(StudentInfo){
    if(!/^[0-9]+$/.test(StudentInfo.StudentId)){
        throw ("StudentId must be numeric")
    }
    else if(!/^[a-zA-Z ]+$/.test(StudentInfo.StudentName)){
                    throw ("Student Name is Invalid")
    }
    else if(!Number.isInteger(StudentInfo.GPA)){
        throw("GPA should be numeric")
    }
    else if(StudentInfo.Branch.length>3 || !(/^[a-zA-Z]+$/.test(StudentInfo.Branch))){
        throw ("Invalid Branch")
    }
    else if(StudentInfo.Section.length != 1){
        throw ("Invalid Section Name")
    }
}