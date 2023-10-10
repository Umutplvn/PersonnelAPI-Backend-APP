"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

// department

const DepartmentSchema =new mongoose.Schema({   // Bu bir classdan turetilmis bir instancedir
    name:{
        type: String,
        trim: true,
        require: true,
        unique: true
    }
},{collection:"departments", timestamps:true})



/* ------------------------------------------------------- */
module.exports=mongoose.model('Department', DepartmentSchema)