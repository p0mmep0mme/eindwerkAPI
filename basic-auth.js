const jwt = require("jsonwebtoken");
const { client_encoding } = require("pg/lib/defaults");
const db = require("./database.js");


// functies
var bestaatUser = (req, res, user="admin") => {
    
    console.log(user)
    // console.log(gebruiker.username)
    db.query(`SELECT * FROM users WHERE username = '${user}'`, (err, result) =>  {
        if(err)throw err
        if(result.length > 0){            
            res.send(result.rows)
        }else{
            res.send('Incorrect Username and/or Password!')
        }
        res.end()
        })
        
    


}

var returnRol = (username) => {
    
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
var authorizationHandling = (req, res, next, vereisteRol="Admin") => {
    const gebruiker = bearerAuthCredentialsFromHeader(req.headers.authorization);
    
    if(gebruiker != undefined){
        console.log(gebruiker.username)
       let gebruikerdb =  db.query(`SELECT * FROM users WHERE username = '${gebruiker.username}'`, (err, result) =>  {
            if(err)throw err
            console.log(result.rows[0])
            console.log(result.rows[0].username)
            if(result.rowCount > 0){ 
                console.log(result)        
                return result.rows[0]
            }else{
                console.log("unde") 
                return undefined
            }
            
            })
        
        // let gebruikerdb = bestaatUser(gebruiker.username)
        
        console.log(gebruikerdb)
        console.log(gebruikerdb.rol)
        if (vereisteRol == gebruikerdb.rol) {
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
    admin:(req, res, next) => { authorizationHandling(req, res, next, "Admin")}
}

function login(req, res){
   
    if(bestaatUser2 !== undefined){
               
        let payload = { "username" : req.body.username }
        let secret = "geheim"
        let token = jwt.sign(payload, secret)
        
        res.json({"jwt" : token})
        
    } else {
        res.json({"message": "niet correct, geen toegang"})
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