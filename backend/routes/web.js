const express = require('express');
const recipeController = require('../controlllers/recipeController');
const userController = require('../controlllers/userController');
const daftarbelanjaController = require('../controlllers/daftarbelanjaController');
const favoriteController = require('../controlllers/favoriteController');
const checkAuthMiddleware = require('../middleware/check-auth');
const imageController = require('../controlllers/imageController');
const upload = require('../helpers/upload');

const router = express.Router();

router.post("/resep/create", checkAuthMiddleware.checkAuth, recipeController.create);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/resep/:id", recipeController.getOne);
router.get("/resep", recipeController.getAll);
router.patch("/resep/:id/update", checkAuthMiddleware.checkAuth, recipeController.update);
router.delete("/resep/:id/delete", checkAuthMiddleware.checkAuth, recipeController.destroy);

router.get("/daftarBelanja", daftarbelanjaController.getDaftar);
router.post("/daftarBelanja/create", checkAuthMiddleware.checkAuth, daftarbelanjaController.create);
router.patch("/daftarBelanja/update", checkAuthMiddleware.checkAuth, daftarbelanjaController.update);

router.get('/user/:userId/favorites', favoriteController.getFavoritesByUser);
router.post('/user/favorites', checkAuthMiddleware.checkAuth, favoriteController.addRecipeToFavorites);
router.delete('/user/favorites', checkAuthMiddleware.checkAuth, favoriteController.removeRecipeFromFavorites);
//router.post('/upload', checkAuthMiddleware.checkAuth, imageUploader.upload.single('image'), imageController.upload)
router.post('/upload', upload.single('image'), imageController.uploadImage);


module.exports = router;