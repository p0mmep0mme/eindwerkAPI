const jwt = require("jsonwebtoken");
const db = require("./database.js");


// functies
var bestaatUser = (req,res) => {
    db.query(`SELECT * FROM users WHERE username = '${req.body.username}'`, (err, result) =>  {if(err)throw err;
        if(result.length > 0){
           
            res.send(result.rows)
        }else{
            res.send('Incorrect Username and/or Password!')
        }
        res.end()
    })

    // let gebruikers = mijndb.users;
    // return gebruikers.find(gebruiker => ((gebruiker.username === username) ));
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
    console.log(bestaatUser2)
    if(bestaatUser2 !== undefined){
        req.session.loggedin = true
        req.session.username = username
        
        let payload = { "username" : req.body.username };
        let secret = "geheim";
        let token = jwt.sign(payload, secret);
        res.json({"jwt" : token});
        res.redirect("/menu")
    } else {
        res.json({"message": "niet correct, geen toegang"});
    }
}
const bestaatUser2 =  (req, res) =>{
    
        db.query(`SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}' `, (err, result) =>  {if(err)throw err;
            if(result.length > 0){
               
                res.send(result.rows)
            }else{
                res.send('Incorrect Username and/or Password!')
            }
            res.end()
        })
      

};

 module.exports  = { getToegang, authRouting, login };