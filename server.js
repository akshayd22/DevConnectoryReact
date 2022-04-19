const express = require("express"); //Bring express module
const mongoose = require('mongoose'); //impoert Mongoose module to connect mongoDB

// Import All Routes file

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();  //Initializing App veriable to express

// DB config
const db = require('./config/keys').mongoURI;   //Coonection string

// Connect to mongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected')) //Handling Promises
    .catch(err => console.log(err));

// make basic route to display someting
// app.get('/', (req, res) => res.send('Hello World'));

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Create variable for port 
// we deploye on Heroku for that we use - process.env.port

const port = process.env.port || 5000;

// () => console.log()- callback function
app.listen(port, () => console.log(`Server running on port ${port}`));




