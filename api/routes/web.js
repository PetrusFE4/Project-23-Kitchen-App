const express = require('express');
const recipeController = require('../controlllers/recipeController');
const userController = require('../controlllers/userController');

const router = express.Router();

router.post("/resep/create", recipeController.create);
router.post("/register", userController.register);
router.get("/resep/:id", recipeController.getOne);
router.get("/resep", recipeController.getAll);
module.exports = router;