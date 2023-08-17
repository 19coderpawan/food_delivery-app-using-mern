const express=require('express');
const Router2=express.Router();
const UserSchema=require('../models/schema');
const {body,validationResult}=require('express-validator');

Router2.post('/userlogin',[
 body('email','check your email agian!').isEmail(),
 body('password','check your password again!').isLength({min:5})
],async(req,res)=>{
   const err=validationResult(req);
   if(!err.isEmpty()){
      return res.status(400).json({error:"check your details again!"});
   }
   let email=req.body.email;
   try {
      const userEmail=await UserSchema.findOne({email});
      if(!userEmail){
        return res.status(400).json({error:"your email doesnt match check it again!"});
      }
      if(req.body.password !== userEmail.password){
        return res.status(400).json({error:"your password is incorrect check it again!"});
      }
      return res.json({success:true});
   } catch (error) {
    throw error;
   }
})

module.exports=Router2;