const Pool = require("pg").Pool;

const pool = new Pool({
    user: "kuklpsxjydnblu",
    host: "ec2-99-80-170-190.eu-west-1.compute.amazonaws.com",
    database: "d69013s2v5ealh", 
    port: 5432,
    password: "eef8b90546b3d90f332de10020bf44002ada6a142ee8eaa2738da8ca635253a5",
    ssl:{
        rejectUnauthorized : false,
    }

});

module.exports = pool;