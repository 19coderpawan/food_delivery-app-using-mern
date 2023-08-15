const express=require('express');
// now that you have to create an instance for the Router().
const router=express.Router();
// we are going to create the model on the schema basis so lets import the schema here.
const UserSchema=require('../models/schema');
// here we are using post method beacuse we have to post the data in the database.
router.post('/createuser',async (req,res)=>{
    try {
         await UserSchema.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({success:true});
    } catch (error) {
        throw err;
        res.json({success:false});
    }
})

module.exports=router;