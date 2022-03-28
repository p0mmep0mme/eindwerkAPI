var express = require("express");
const mijndb = require("../fakedb.js");


const router = express.Router();
const baseuri = "/menu";

router.get("/", mijndb.getGebruikers);

router.get("/producten",mijndb.getAllProducten);
router.get("/producten/:id", mijndb.getProductById);

router.get("/bestelling/:id", mijndb.getBestellingById);
router.post("/bestelling", mijndb.setBestelling);

router.get("/ingredienten/:id", mijndb.getIngredientByID);
router.get("/ingredienten", mijndb.getAllIngredienten);

router.get("/samenstelling/:id", mijndb.getSamenstellingById);
router.get("/samenstelling", mijndb.getAllSamenstelling);

router.get("/suballergenen/:id", mijndb.getSuballergeenById);
router.get("/suballergenen", mijndb.getSuballergenen);

router.get("/subtypes/:id", mijndb.getSubTypeById);
router.get("/subtypes", mijndb.getAllSubTypes);

router.get("/dranken", mijndb.getAlldranken);
router.get("/dranken/:id", mijndb.getDrankById);

router.get("/afrekening/:id",mijndb.getAfrekeningById);

module.exports = (app) => { app.use(baseuri, router); } 
