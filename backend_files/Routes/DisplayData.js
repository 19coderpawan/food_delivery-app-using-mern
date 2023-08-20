const express=require('express');
const Router3=express.Router();

Router3.post('/DisplayData',async(req,res)=>{
   try {
       
       res.send([global.food_items_data,global.food_category_data]);   

   } catch (error) {
       throw err;
   }
})

module.exports=Router3;