const express=require('express');
// now that you have to create an instance for the Router().
const router=express.Router();
// we are going to create the model on the schema basis so lets import the schema here.
const UserSchema=require('../models/schema');
// here we are using post method beacuse we have to post the data in the database.

/* Now i also want to set some validation on the data the user is going to send as an req for that 
we are going to use the express-validation library. in this we have multiple function to validate the data. */

/* firstly import the express-validator*/
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcrypt');
router.post('/createuser',[
 body('email','invalid email check your email agian!').isEmail(),
 body('password','invalid password').isLength({min:5}),
 body('name','length of the name is to short!').isLength({min:3})
]
,async (req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }
    const salt=await bcrypt.genSalt(10);
    let securepassword=await bcrypt.hash(req.body.password,salt);
    try {
         await UserSchema.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:securepassword,
        })
        res.json({success:true});
    } catch (error) {
        throw err;
        res.json({success:false});
    }
})

module.exports=router;
