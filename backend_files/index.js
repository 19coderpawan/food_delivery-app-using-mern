/*This line imports the 'express' module. The require() function is used to import external modules
 in Node.js. The 'express' module is a popular framework for building web applications and APIs in Node.js. */
const express = require('express');
/* This line creates an instance of the Express application by calling the express() function. 
The 'app' variable represents the entire application and is used to configure routes, middleware, 
and other settings. */
const app = express();
/*This line sets the value of the 'port' constant to 5000. 
This is the port number on which the server will listen for incoming requests. */

const connectdb=require('./database');
// dotenv package provides us the access to fetch the value from the environment variable file with the help 
// of process module that is the core module of the nodejs
const dotenv=require('dotenv').config();
const port = process.env.Port;
connectdb();

/*This line defines a route for the root URL ("/") using the HTTP GET method. 
When a client makes a GET request to the root URL, the callback function specified here will be executed. 
The callback function takes two parameters: 'req' (the request object) and 'res' (the response object). */
app.get('/', (req, res) => {
    /*Inside the callback function, this line sends the string "hello world" as the response 
    to the client that made the request. The res.send() function is used to send content to the client. */
    res.send(`<h1>Hello pawan</h1>`);
})


/*This line starts the Express server and makes it listen on the specified port. 
When the server starts listening, the callback function is executed.In this case, it logs a message 
indicating that the server is running and listening on the specified port. */
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
