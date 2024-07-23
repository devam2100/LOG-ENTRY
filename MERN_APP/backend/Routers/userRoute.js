const express = require("express");
const mongoose = require("mongoose");
const user =require("../Model/userModel");
const router =express.Router();

router.post("/",async (req,res)=>{
    const { name,email,age}=req.body
    try{
        const userData = await user.create({
            name : name,
            email : email,
            age : age  
        });
        res.status(201).json(userData)
    }catch(error)
    { console.log(error);
         res.status(400).json({error:"some thing went wrong"});
    } 
});
router.get("/", async(req,res)=>{   
    try{
        const showone = await user.find()
        res.status(200).json(showone)
    }catch(error)
    { console.log(error);
         res.status(500).json({error:"some thing went wrong"});
    }
});
router.get("/:id", async(req,res)=>{ 
    const { id }=req.params;  
    try{
        const singleUser = await user.findById({_id : id});
        res.status(200).json(singleUser)
    }catch(error)
    { console.log(error);
         res.status(500).json({error:"some thing went wrong"});
    }
});
router.delete("/:id", async(req,res)=>{ 
    const {id}=req.params;  
    try{
        const deletesingleUser = await user.findByIdAndDelete({_id:id});
        res.status(200).json(deletesingleUser)
    }catch(error)
    { console.log(error);
         res.status(500).json({error:"some thing went wrong"});
    }
});
router.patch("/:id", async(req,res)=>{ 
    const {id}=req.params;  
    const{name,
         email,
         age}=req.body;
    try{
        const UpdateUser = await user.findByIdAndUpdate(id,req.body,{new: true,});
        res.status(200).json(UpdateUser)
    }catch(error)
    { console.log(error);
         res.status(500).json({error:"some thing went wrong"});
    }
});


module.exports = router;



