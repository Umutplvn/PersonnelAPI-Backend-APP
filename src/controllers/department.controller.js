"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const {Department}=require('../models/department.model')
const { search } = require('../routes/department.router')

module.exports={
    list: async (req, res)=>{
        // const data=await Department.find(search).sort().skip().limit() // asagidaki islemle list icin bunlarin tumunu middleware icinde yazmistik 
        const data=await res.getModelList(Department) 

        res.status(200).send({
            error:false,
            data, //  data:data
        })
    },

    create: async (req, res)=>{
        const data =await Department.create(req.body)
        
        res.status(201).send({
            error:false,
            data, //  data:data
        })
    },

    read: async (req, res)=>{
        const data=await Department.findOne({_id:req.params.id})    //findById de kullanilabilir


        res.status(200).send({
            error:false,
            data, //  data:data
        })
    },

    update: async (req, res)=>{
        const data=await Department.updateOne({_id:req.params.id}, req.body)    //{filtereleme}, yeni deger

        res.status(202).send({
            error:false,
            data, //  data:data
            new: await Department.findOne({_id:req.params.id})  //datanin guncellenmis halini gormek icin - read one icin yazdigimizi kopyala yapistir
        })
    },

    delete: async (req, res) => {

        const data = await Department.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

        // const isDeleted = data.deletedCount >= 1 ? true : false

        // res.status(isDeleted ? 204 : 404).send({
        //     error: !isDeleted,
        //     data
        // })
    },