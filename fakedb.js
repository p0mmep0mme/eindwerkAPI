const db = require("./database.js");
const vraagAlleProducten = "SELECT * FROM producten";


const users = [
    {
        "id" : 1,
        "rol": "user",
        "username": "patrick", 
        "password": "ww",
        "optie": ""
    },
    {
        "id" : 2,
        "rol": "admin",
        "username": "semmi", 
        "password": "wachtw",
        "optie": ""
    },
    {
        "id" : 3,
        "rol": "banned",
        "username": "tim", 
        "password": "wachtwoord",
        "optie": ""
    }
];

// functies 
var getAllProducten = (req, res) => {
    db.query(vraagAlleProducten, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getProductById = (req, res) => {
    db.query(`SELECT * FROM Producten WHERE ProductID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setProduct = (req, res) => {
    db.query(`INSERT INTO producten (productNaam, SubTypeID, unitPrijs, foto) VALUES('${req.body.productNaam}', ${req.body.SubTypeID}, ${req.body.unitPrijs} , ${req.body.foto})`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};

var getAllAfrekeningen = (req, res) => {
    db.query(`SELECT * FROM afrekening`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getAfrekeningById = (req, res) => {
    db.query(`SELECT * FROM afrekening WHERE afrekeningID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setAfrekening = (req, res) => {
    db.query(`INSERT INTO afrekening (tafelnummer, totaal, betaald) VALUES('${req.body.tafelnummer}', ${req.body.totaal}, ${req.body.betaald})`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var getAllBestellingen = (req, res) => {
    db.query(`SELECT * FROM bestelling`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getBestellingById = (req, res) => {
    db.query(`SELECT * FROM bestelling WHERE bestellingID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setBestelling = (req, res) => {
    db.query(`INSERT INTO bestelling (aantal, subtotaalprijs) VALUES(${req.body.aantal}, ${req.body.subtotaalprijs})`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};

var getAllIngredienten = (req, res) => {
    db.query(`SELECT * FROM ingredienten`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getIngredientByID = (req, res) => {
    db.query(`SELECT * FROM ingredienten WHERE ingredientenID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setIngredient = (req, res) => {
    db.query(`INSERT INTO ingredienten (ingredient) VALUES('${req.body.ingredient}')`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var getAllSamenstelling = (req, res) => {
    db.query(`SELECT * FROM samenstelling`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getSamenstellingById = (req, res) => {
    db.query(`SELECT * FROM samenstelling WHERE samenstellingID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setSamenstelling = (req, res) => {
    db.query(`INSERT INTO samenstelling ( productID, ingredientenID) VALUES('${req.body.productID}', ${req.body.ingredientenID})`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};

var getSuballergenen = (req, res) => {
    db.query(`SELECT * FROM suballergenen`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getSuballergeenById = (req, res) => {
    db.query(`SELECT * FROM suballergenen WHERE subAllergenenID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setSuballergeen = (req, res) => {
    db.query(`INSERT INTO suballergenen (allergie) VALUES('${req.body.allergie}')`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var getAllSubTypes = (req, res) => {
    db.query(`SELECT * FROM subtypes`, (err, result) => {
        if(err)throw err;
        res.send(result)
    })
};

var getSubTypeById = (req, res) => {
    db.query(`SELECT * FROM subtypes WHERE SubTypeID = ${req.params.id}`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};
var setSubType = (req, res) => {
    db.query(`INSERT INTO subtypes ( mainType, subType) VALUES(${req.body.maintype}, '${req.body.subtype}')`, (err, result) =>  {if(err)throw err;
    res.send(result) });

};



function getGebruikers(req, res){

    res.json(users);
};

var getGebruiker = (req, res) => {
    res.json(users.find(element => element.id === parseInt(req.params.id)))
};


module.exports = {
    getProductById,
    getAllProducten,  
    setProduct, 
    getAllAfrekeningen, 
    getAfrekeningById, 
    setAfrekening,
    setBestelling, 
    getBestellingById, 
    getAllBestellingen, 
    getGebruiker, 
    getGebruikers, 
    users, 
    getAllIngredienten, 
    getIngredientByID,
    setIngredient, 
    getAllSamenstelling, 
    getSamenstellingById, 
    setSamenstelling, 
    getSuballergenen, 
    getSuballergeenById, 
    setSuballergeen, 
    getAllSubTypes, 
    getSubTypeById, 
    setSubType
};