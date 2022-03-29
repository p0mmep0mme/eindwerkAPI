const jwt = require("jsonwebtoken");

const db = require("./database.js");


// functies




function bearerAuthCredentialsFromHeader(authHeader){
    const encodedAuth = (authHeader || '').split(' ')[1] || '' // getting the part after Basic

    if (encodedAuth == null || encodedAuth === ''){
        console.error("isnull");
        return null;
    } else { 
        return jwt.verify(encodedAuth, "geheim");
    }

} 
var  authorizationHandling = (req, res, next, vereisteRol="Admin") => {
    const gebruiker = bearerAuthCredentialsFromHeader(req.headers.authorization);
    
    if(gebruiker != undefined){
        
      db.query(`SELECT * FROM users WHERE username = '${gebruiker.username}'`, (err, result) =>  {
            if(err)throw err
            
            if(result.rowCount > 0){ 
                
                
                if (vereisteRol == result.rows[0].rol) {
                    console.log("je hebt rechten");
                    next();
            
                    
                } else {
                    res.send("je hebt geen rechten")
                    
                }
                       
                
            }else{
                 
                res.send(undefined) 
            }
            
            })
        
        
        
       
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
   
    if(bestaatUser() !== undefined){
               
        let payload = { "username" : req.body.username }
        let secret = "geheim"
        let token = jwt.sign(payload, secret)
        
        res.json({"jwt" : token})
        
    } else {
        res.json({"message": "niet correct, geen toegang"})
    }
}
const bestaatUser =  (req, res) =>{
    
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