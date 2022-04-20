const express  = require("express");
const cors     = require("cors");
const app      = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json()); // parse requests of content-type - application/json

// parse requests of content-type 
// - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// simple route
app.get("/:name?", (req, res) => {
    if(req.params.name){   
        res.json({ 
            id: 1, 
            message: `Welcome to ${req.params.name} application` 
        });
    }else{
        res.json({
            id: 2,
            message: 'Welcome to our application'  
        })
    }
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});