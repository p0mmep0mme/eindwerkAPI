const Pool = require("pg").Pool;

const pool = new Pool({
    user: "xpesxvhtwdgtln",
    host: "ec2-34-248-169-69.eu-west-1.compute.amazonaws.com",
    database: "d6lnq9omdg8ij4", 
    port: 5432,
    password: "9650888a6a0c61cdc463dbb71139c1ef6e891cd79e400789163be6677136a79d",
    ssl:{
        rejectUnauthorized : false,
    }

});

module.exports = pool;