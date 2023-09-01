const mongoose =require('mongoose');
const {Schema}= mongoose;

const OrderSchema=new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    OrderData:{
        type:Array,
        require:true
    }
})