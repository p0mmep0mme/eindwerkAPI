const Pool = require("pg").Pool;

const pool = new Pool({
    user: "zstyihuuawtbdo",
    host: "ec2-54-220-255-121.eu-west-1.compute.amazonaws.com",
    database: "d400b10j9bcgee", 
    port: 5432,
    password: "399a47896957edde4357f1f44cc28a6105fcc87bd59a07c3cc49b8f3ff9490b1",
    ssl:{
        rejectUnauthorized : false,
    }

});

module.exports = pool;