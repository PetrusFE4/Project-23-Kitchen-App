const express = require('express');
const recipeController = require('../controlllers/recipeController');
const userController = require('../controlllers/userController');
const daftarbelanjaController = require('../controlllers/daftarbelanjaController');
const favoriteController = require('../controlllers/favoriteController');
const checkAuthMiddleware = require('../middleware/check-auth');
const imageController = require('../controlllers/imageController');
const upload = require('../helpers/upload');

const router = express.Router();

router.post("/resep/create", checkAuthMiddleware.checkAuth, recipeController.create); //buat resep pake body json, untuk komponen body liat di model, harus login dulu auth tokenya nanti dimasukin
router.post("/register", userController.register); //buat akun, komponen json username, email, password
router.post("/login", userController.login);//login, komponen json username, email, password. return auth token nanti dipake buat yg harus auth 
router.get("/resep/:id", recipeController.getOne);//tampilkan 1 resep berdasarkan id resep.
router.get("/resep", recipeController.getAll);//tampilkan semua resep. mungkin kalo mau ada filter ato apa bisa di fetch dulu semua terus pake fungsi
router.patch("/resep/:id/update", checkAuthMiddleware.checkAuth, recipeController.update);//untuk update resep
router.delete("/resep/:id/delete", checkAuthMiddleware.checkAuth, recipeController.destroy);//untuk delete resep

router.get("/daftarBelanja", daftarbelanjaController.getDaftar);//untuk nampilin daftar belanja suatu resep. di json body nya butuh userId, jadi mungkin pas login user id bisa disimpen dulu
router.post("/daftarBelanja/create", checkAuthMiddleware.checkAuth, daftarbelanjaController.create);//bikin daftar belanja pas pertama kali liat daftar belanja mungkin. json butuh userId sama optional content
router.patch("/daftarBelanja/update", checkAuthMiddleware.checkAuth, daftarbelanjaController.update);//update daftar belanja pas user ngotak ngatik di textfield daftar belanja

router.get('/user/:userId/favorites', favoriteController.getFavoritesByUser);//nampilin favorite suatu user
router.post('/user/favorites', checkAuthMiddleware.checkAuth, favoriteController.addRecipeToFavorites);//add suatu resep ke favorite user, jsonya butuh userId sama resepId
router.delete('/user/favorites', checkAuthMiddleware.checkAuth, favoriteController.removeRecipeFromFavorites);//delet suatu resep dari favorite
//router.post('/upload', checkAuthMiddleware.checkAuth, imageUploader.upload.single('image'), imageController.upload)
router.post('/upload', upload.single('image'), imageController.uploadImage);//buat upload image

//http://127.0.0.1:8888/uploads/<namafile> buat nanti dimasukin ke bagian gambar resep waktu nge post resep pas udh nge upload gambar

module.exports = router;