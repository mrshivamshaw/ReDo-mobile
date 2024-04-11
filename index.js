// Importing express
import express from 'express';
const app = express();
import user from './models/profile.js';


// Middleware to parse JSON requests
app.use(express.json());

// Importing the dbconnect function from ./config/database.js
import dbconnect from './config/database.js';
dbconnect();

// Start the server on port 4000
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});



// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello World');
});
