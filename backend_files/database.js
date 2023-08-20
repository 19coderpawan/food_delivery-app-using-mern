
const mongoose = require('mongoose');
// const uri="mongodb+srv://19pawanclasher:happyfood@happyfood.b9fcujp.mongodb.net/happyfood?retryWrites=true&w=majority"


const conectdb = async () => {
    try {
        // dotenv package provides us the access to fetch the value from the environment variable file with the help 
        // of process module that is the core module of the nodejs
        const connect = await mongoose.connect(process.env.connection_string)
        console.log("connection established:", connect.connection.host, connect.connection.name);
        /* This is how to can fetch the data form the database using mongoose. */
        const fetch_data_items = mongoose.connection.db.collection('fooditems');
        const data = await fetch_data_items.find({}).toArray();

        // console.log(data);
        // declare a global variable and store the data in it.
        global.food_items_data=data;  /* globally declaring the var means i can use and update this variable
                                         anywhere in the application. */
        // console.log(global.food_items_data);
    

        // now lets fetch the  food_category data also.
        const fetch_category_data=mongoose.connection.db.collection('foodcategory');
        const Categroy_data=await fetch_category_data.find({}).toArray();
        global.food_category_data=Categroy_data;
        
    }
    catch (err) {
        console.log("error occured");
        throw err;
    }
}

module.exports = conectdb;
