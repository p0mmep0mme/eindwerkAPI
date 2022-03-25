var express = require("express");
const mijndb = require("../fakedb.js");
const basicAuth= require("../basic-auth.js");


const router = express.Router();
const baseuri = "/restricted";

router.get("/users",basicAuth.authRouting.admin, mijndb.getGebruikers);
router.get("/users/:id",basicAuth.authRouting.admin, mijndb.getGebruiker);


router.get("/bestellingen",basicAuth.authRouting.admin, mijndb.getAllBestellingen);
router.get("/bestellingen/:id",basicAuth.authRouting.admin, mijndb.getBestellingById);
router.post("/bestellingen",basicAuth.authRouting.admin, mijndb.setBestelling);
router.put("/bestellingen/:id",basicAuth.authRouting.admin, mijndb.updateBestelling);
router.delete("/bestellingen/:id",basicAuth.authRouting.admin, mijndb.deleteBestelling);

router.get("/producten",basicAuth.authRouting.admin, mijndb.getAllProducten);
router.get("/producten/:id",basicAuth.authRouting.admin, mijndb.getProductById);
router.post("/producten",basicAuth.authRouting.admin, mijndb.setProduct);
router.put("/producten/:id",basicAuth.authRouting.admin, mijndb.updateProduct);
router.delete("/producten/:id",basicAuth.authRouting.admin, mijndb.deleteProduct);


router.get("/dranken", mijndb.getAlldranken);
router.get("/dranken/:id", mijndb.getDrankById);
router.post("/dranken", mijndb.setDrank);
router.put("/dranken/:id", mijndb.updateDrank);

router.delete("/dranken/:id", mijndb.deleteDrank);



router.get("/afrekening",basicAuth.authRouting.admin, mijndb.getAllAfrekeningen);
router.get("/afrekening/:id",basicAuth.authRouting.admin, mijndb.getAfrekeningById);
router.post("/afrekening",basicAuth.authRouting.admin, mijndb.setAfrekening);
router.put("/afrekening/:id",basicAuth.authRouting.admin, mijndb.updateAfrekening);
router.delete("/afrekening/:id",basicAuth.authRouting.admin, mijndb.deleteAfrekening);



router.get("/ingredienten/:id",basicAuth.authRouting.admin, mijndb.getIngredientByID);
router.get("/ingredienten",basicAuth.authRouting.admin, mijndb.getAllIngredienten);
router.post("/ingredienten",basicAuth.authRouting.admin, mijndb.setIngredient);
router.put("/ingredienten/:id",basicAuth.authRouting.admin, mijndb.updateIngredient);
router.delete("/ingredienten/:id",basicAuth.authRouting.admin, mijndb.deleteIngredient);



router.get("/samenstelling/:id",basicAuth.authRouting.admin, mijndb.getSamenstellingById);
router.get("/samenstelling",basicAuth.authRouting.admin, mijndb.getAllSamenstelling);
router.post("/samenstelling",basicAuth.authRouting.admin, mijndb.setSamenstelling);
router.put("/samenstelling/:id",basicAuth.authRouting.admin, mijndb.updateSamenstelling);
router.delete("/samenstelling/:id",basicAuth.authRouting.admin, mijndb.deleteSamenstelling);




router.get("/suballergenen/:id",basicAuth.authRouting.admin, mijndb.getSuballergeenById);
router.get("/suballergenen",basicAuth.authRouting.admin, mijndb.getSuballergenen);
router.post("/suballergenen",basicAuth.authRouting.admin, mijndb.setSuballergeen);
router.put("/suballergenen/:id",basicAuth.authRouting.admin, mijndb.updateSuballergeen);
router.delete("/suballergenen/:id",basicAuth.authRouting.admin, mijndb.deleteSuballergeen);



router.get("/subtypes/:id",basicAuth.authRouting.admin, mijndb.getSubTypeById);
router.get("/subtypes",basicAuth.authRouting.admin, mijndb.getAllSubTypes);
router.post("/subtypes",basicAuth.authRouting.admin, mijndb.setSubType);
router.put("/subtypes/:id",basicAuth.authRouting.admin, mijndb.updateSubType);
router.delete("/subtypes/:id",basicAuth.authRouting.admin, mijndb.deleteSubType);




// router.get("/:drank", basicAuth.authRouting.user, mijndb.getDranken);


module.exports = (app) => { app.use(baseuri, router); } 