const models = require('../models');

function register(req,res){
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    models.user.create(user).then(result=>{

        res.status(201).json({
            message: "user registered successfuly",
            resep: result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "Something wrong",
            error: error
        });
    });
}


module.exports ={
    register:register
}