const models = require('../models');
const bycrptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function register(req,res){
    models.user.findOne({email: req.body.email})
    

    
    
}


module.exports ={
    register:register
}