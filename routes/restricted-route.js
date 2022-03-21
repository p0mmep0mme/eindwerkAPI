var express = require("express");
const mijndb = require("../fakedb.js");
const basicAuth= require("../basic-auth.js");


const router = express.Router();
const baseuri = "/restricted";

router.get("/users",basicAuth.authRouting.admin, mijndb.getGebruikers);
router.get("/users/:id",basicAuth.authRouting.admin, mijndb.getGebruiker);


router.get("/bestellingen",basicAuth.authRouting.admin, mijndb.getAllBestellingen);
router.get("/bestellingen/:id",basicAuth.authRouting.admin, mijndb.getBestellingById);
router.post("/bestellingen",basicAuth.authRouting.admin, mijndb.setIngredient);


router.get("/producten",basicAuth.authRouting.admin, mijndb.getAllProducten);
router.get("/producten/:id",basicAuth.authRouting.admin, mijndb.getProductById);
router.post("/producten",basicAuth.authRouting.admin, mijndb.setProduct);

router.get("/afrekening",basicAuth.authRouting.admin, mijndb.getAllAfrekeningen);
router.get("/afrekening/:id",basicAuth.authRouting.admin, mijndb.getAfrekeningById);
router.post("/afrekening",basicAuth.authRouting.admin, mijndb.setAfrekening);



router.get("/ingredienten/:id",basicAuth.authRouting.admin, mijndb.getIngredientByID);
router.get("/ingredienten",basicAuth.authRouting.admin, mijndb.getAllIngredienten);
router.post("/ingredienten",basicAuth.authRouting.admin, mijndb.setIngredient);


router.get("/samenstelling/:id",basicAuth.authRouting.admin, mijndb.getSamenstellingById);
router.get("/samenstelling",basicAuth.authRouting.admin, mijndb.getAllSamenstelling);
router.post("/samenstelling",basicAuth.authRouting.admin, mijndb.setSamenstelling);


router.get("/suballergenen/:id",basicAuth.authRouting.admin, mijndb.getSuballergeenById);
router.get("/suballergenen",basicAuth.authRouting.admin, mijndb.getSuballergenen);
router.post("/suballergenen",basicAuth.authRouting.admin, mijndb.setSuballergeen);


router.get("/subtypes/:id",basicAuth.authRouting.admin, mijndb.getSubTypeById);
router.get("/subtypes",basicAuth.authRouting.admin, mijndb.getAllSubTypes);
router.post("/subtypes",basicAuth.authRouting.admin, mijndb.setSubType);



// router.get("/:drank", basicAuth.authRouting.user, mijndb.getDranken);


module.exports = (app) => { app.use(baseuri, router); } 