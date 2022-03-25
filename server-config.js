var express = require("express");
var cors = require("cors")

// app opzetten
const app = express();

// app configureren
app.use(express.json());
app.use(express.urlencoded({
    extended : true 
}));

app.use(cors({
    origin: "*",
    optionsSuccessStatus : 200
}));

// app configuratie exporten
module.exports = () => app;
