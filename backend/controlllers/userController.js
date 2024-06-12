const models = require('../models');
const bycrptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


function register(req, res){

    models.user.findOne({where:{email: req.body.email}}).then(result => {
        if(result){
            res.status(409).json({
                message: "Email telah digunakan"
            });
        }else {
            bycrptjs.genSalt(10, function(err, salt) {
                bycrptjs.hash(req.body.password, salt, function(err, hash) {
                    const user = {
                        username: req.body.username,
                        email: req.body.email,
                        password: hash
                    };
                
                    models.user.create(user).then(result => {
                        res.status(200).json({
                            message: "User berhasil ditambahkan"
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Terjadi kesalahan!"
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Terjadi kesalahan!"
        });
    });
    
}

function login(req, res) {
    models.user.findOne({where: {email: req.body.email}}).then(user => {
        if(user === null) {
            res.status(401).json({
                message: "User tidak ditemukan!"
            });
        }else {
            bycrptjs.compare(req.body.password, user.password, function(err, result) {
                if(result) {
                    const token = jwt.sign ({
                        email: user.email,
                        userId: user.id
                    }, 'secret', function(err, token) {
                        res.status(200).json({
                            message: "Autentikasi sukses!",
                            token: token
                        });
                    });
                }else {
                    res.status(401).json({
                        message: "Data yang dimasukkan tidak sesuai!"
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Terjadi kesalahan!"
        })
    });
}


module.exports ={
    register:register,
    login:login
}