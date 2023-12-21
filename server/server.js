const express = require('express');
const app = express();


app.listen(4000, () => {
    console.log(`Server is listening on port 3000`);
})
//Middlewares 
app.use(express.json());

//Routes
app.get("/api", (req, res) => {
    res.send("Welcome to the index page");
})
const menuRouter = require("./routes/menu");
app.use("/api/menu", menuRouter);