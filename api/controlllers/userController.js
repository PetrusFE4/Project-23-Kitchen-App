const models = require('../models');
const bycrptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// function register(req,res){
//     models.user.findOne({email: req.body.email})
// }

function register(req, res){
    const user = {
        username: req.res.username,
        email: req.res.email,
        password: req.res.password
    }

    models.User.create(user).then(result => {
        res.status(201).jsonc({
            message: "User berhasil ditambahkan"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Terjadi kesalahan!"
        });
    });
}


module.exports ={
    register
}