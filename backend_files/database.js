
const mongoose = require('mongoose');
// const uri="mongodb+srv://19pawanclasher:happyfood@happyfood.b9fcujp.mongodb.net/happyfood?retryWrites=true&w=majority"


const conectdb = async () => {
    try {
        // dotenv package provides us the access to fetch the value from the environment variable file with the help 
        // of process module that is the core module of the nodejs
        const connect = await mongoose.connect(process.env.connection_string)
        console.log("connection established:", connect.connection.host, connect.connection.name);
        const fetch_data = mongoose.connection.db.collection('fooditems');
        const data = await fetch_data.find({}).toArray();

        console.log(data);


    }
    catch (err) {
        console.log("error occured");
        throw err;
    }
}

module.exports = conectdb;