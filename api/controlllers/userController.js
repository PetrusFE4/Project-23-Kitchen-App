const models = require('../models');
const bycrptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// function register(req,res){
//     models.user.findOne({email: req.body.email})
// }

function register(req, res){
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    models.user.create(user).then(result => {
        res.status(200).json({
            message: "User berhasil ditambahkan"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Terjadi kesalahan!"
        });
    });
}


module.exports ={
    register:register
}