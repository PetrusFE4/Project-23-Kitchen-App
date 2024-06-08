const models = require('../models');

function create(req, res){
    const resep = {
        nama_resep: req.body.nama_resep,
        deskripsi: req.body.deskripsi,
        bahan: req.body.bahan,
        instruksi: req.body.instruksi,
        kategori: req.body.kategori,
        subKategori: req.body.subKategori,
        userId: 1
    }
    
    models.resep.create(resep).then(result=>{
        res.status(201).json({
            message: "resep created successfuly",
            resep: result
        });
    }).catch(error=>{
        res.status(500).json({
            message: "Something wrong",
            error: error
        });
    });
}

function getOne(req, res){
    const id = req.params.id;
    models.resep.findByPk(id).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message:"something wrong!"
        })
    })
}

function getAll(req,res){
    models.resep.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json({
            message:"something wrong!"
        })
    })
}

module.exports ={
    create:create,
    getOne:getOne,
    getAll:getAll
}