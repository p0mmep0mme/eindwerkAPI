var express = require("express");
const basicAuth= require("../basic-auth.js");

const router = express.Router();
const baseurl = "/login";

router.post("/", basicAuth.login);
router.get("/", basicAuth.login);

//goed

module.exports = (app) => { app.use(baseurl, router);};