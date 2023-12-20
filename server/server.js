const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})
//Middlewares 
app.use(express.json());

//Routes
app.get("/", (req, res) => {
    res.send("Welcome to the index page");
})