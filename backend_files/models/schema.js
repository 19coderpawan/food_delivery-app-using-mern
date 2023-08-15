const mongoose = require('mongoose');
/*-----------------------SCHEMA DETAILS---------------------------------------------
  In Express.js, Mongoose is a popular library used to interact with MongoDB databases. 
  Schemas in Mongoose help define the structure and rules for the documents you store in your database.
 Think of a schema as a blueprint for your data.

Here's a simple explanation of schemas in Mongoose:
A schema in Mongoose is like a template that describes how your data should look in the MongoDB database.
It defines the fields, their data types, and any validation rules that need to be applied to the data. 
This ensures that the data you store in your database follows a consistent structure and meets certain criteria.

For example, if you were creating a schema for a blog post, you might define fields like "title," "content," 
and "author." You can specify that the "title" field should be a string, the "content" field should be text, 
and the "author" field should be a reference to another schema representing authors. 
Additionally, you can set rules like requiring a title and limiting the length of the content.

By using schemas, you can manage your data more effectively and ensure that your application interacts 
with the database in a predictable way. Mongoose also provides methods to perform various database 
operations based on the defined schema, making it easier to handle CRUD (Create, Read, Update, Delete) 
operations in your Express.js application.

 */
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user", UserSchema);