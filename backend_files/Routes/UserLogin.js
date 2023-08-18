const express=require('express');
const Router2=express.Router();
const UserSchema=require('../models/schema');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
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
      // this will compare both the password and return true or false depending upon the scenario.
      const bcryptedPassword=await bcrypt.compare(req.body.password,userEmail.password)
      if(!bcryptedPassword){
        return res.status(400).json({error:"your password is incorrect check it again!"});
      }
      // now once you have checked the password the server will send two things now one is success:true and 
      // another is a jwt .
      const data={// this part is the payload part.
         user:{
            id:userEmail.id
         }
      }
      // then finally generate the autorization toke.
      const authtoken=jwt.sign(data,process.env.secrectkey);// this method has payload and secrectkey as argument 
      // and as per the header let it be default header of the sign method.
      return res.json({success:true,authtoken:authtoken});
   } catch (error) {
    throw error;
   }
})

module.exports=Router2;
