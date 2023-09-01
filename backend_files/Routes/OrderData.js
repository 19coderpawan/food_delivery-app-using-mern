const express=require('express');
const Router4=express.Router();
const orderschema=require('../models/OrderSchema');

Router4.post('/orderdata',async(req,res)=>{
    let data=req.body.order_data
    await data.splice(0,0,{order_date:req.body.order_date});

    // check if email exists or not if now then in DB create one else append the data.
    let emailid=await orderschema.findOne({'email':req.body.email});
    if(emailid===null){
        try {
            await orderschema.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).send("server error", error.message)
        }
    }
else{
    try {
        await orderschema.findOneAndUpdate({email:req.body.email},
            {$push:{order_data:[data]}});
            res.json({success:true})
    } catch (error) {
        res.status(500).send("server error",error);
    }
}
})


module.exports=Router4;