const jwt = require("jsonwebtoken");
const mijndb = require("./fakedb.js");


// functies
var bestaatUser = (username) => {
    let gebruikers = mijndb.users;
    return gebruikers.find(gebruiker => ((gebruiker.username === username) ));
}

var returnRol = (username) => {
    let gebruiker = bestaatUser(username);
    if(gebruiker != null) {
        return gebruiker.rol;
    } else {
        return "niet gevonden";
    }
}

function bearerAuthCredentialsFromHeader(authHeader){
    const encodedAuth = (authHeader || '').split(' ')[1] || '' // getting the part after Basic

    if (encodedAuth == null || encodedAuth === ''){
        console.log("isnull");
        return null;
    } else { 
        return jwt.verify(encodedAuth, "geheim");
    }

} 
var authorizationHandling = (req, res, next, vereisteRol="user") => {
    const gebruiker = bearerAuthCredentialsFromHeader(req.headers.authorization);
    
    if(gebruiker != null){
        let rol = returnRol(gebruiker.username);

        if (vereisteRol === rol) {
            console.log("je hebt rechten");
            next();
    
            
        } else {
            console.log("je hebt geen rechten");
        }
    }
   
}

var getToegang = (req, res, next) => {
    let toegang = false ;
    if (toegang) {
        next();
    } else {
        res.send("geen toegang");
    }
}

const authRouting = {
    user: (req ,res, next) => { authorizationHandling(req, res, next, "user") }, 
    admin:(req, res, next) => { authorizationHandling(req, res, next, "admin")}
}

function login(req, res){
    if(bestaatUser(req.body.username, req.body.password) !== undefined){
        console.log("hier")
        let payload = { "username" : req.body.username };
        let secret = "geheim";
        let token = jwt.sign(payload, secret);
        res.json({"jwt" : token});
    } else {
        res.json({"message": "niet correct, geen toegang"});
    }
}
 module.exports  = { getToegang, authRouting, login };