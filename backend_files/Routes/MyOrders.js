const express=require('express');
const Router5=express.Router();
const Ordersdata=require('../models/OrderSchema');

Router5.post('/myorders',async(req,res)=>{
    try {
        const myorderdata=await Ordersdata.findOne({'email':req.body.email});
        res.json({myorderdata:myorderdata});
    } catch (error) {
        res.status(500).send("server error",error);
    }
})

module.exports=Router5;