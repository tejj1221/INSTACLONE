const express=require("express")
const blogs=require("../models/post")
const route=express.Router();
module.exports=route;
let arr=[]
route.post("/add",async(req,res)=>{
    try{
    await blogs.create({...req.body})
   //console.log({...req.body})
    //console.log(req.files)
    let file=req.files.file;
   file.mv("./uploads/"+file.name)
    // arr.push({...req.body})
    // console.log(arr)
    return res.status(200).json({
        status:"suceess",
        message:"post got added"
    })
    }
    catch(e){  
        return res.status(404).json({
            status:"error",
            message:e.message
        })
    }
})
route.get("/all",async(req,res)=>{
    try{
    const data=await blogs.find().sort({date:-1})
    return res.status(200).json({
        status:"suceess",
        data
    })
    }
    catch(e){
        return res.status(404).json({
            status:"error",
            message:e.message
        })
    }
})
