const express = require('express');
const recipeController = require('../controlllers/recipeController');
const userController = require('../controlllers/userController');
const daftarbelanjaController = require('../controlllers/daftarbelanjaController');
const favoriteController = require('../controlllers/favoriteController');

const router = express.Router();

router.post("/resep/create", recipeController.create);
router.post("/register", userController.register);
router.get("/resep/:id", recipeController.getOne);
router.get("/resep", recipeController.getAll);
router.patch("/resep/:id/update", recipeController.update);
router.delete("/resep/:id/delete", recipeController.destroy);

router.get("/daftarBelanja", daftarbelanjaController.getDaftar);
router.post("/daftarBelanja/create", daftarbelanjaController.create);
router.patch("/daftarBelanja/update", daftarbelanjaController.update);

router.get("/favorite/:id", favoriteController.getFavoritesByUserId);
router.post("/favorite/:id/create", favoriteController.addFavorite);
router.delete("/favorite/:id/delete", favoriteController.deleteFavorite);
module.exports = router;