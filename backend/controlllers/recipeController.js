const models = require('../models');

function create(req, res){
    const resep = {
        nama_resep: req.body.nama_resep,
        deskripsi: req.body.deskripsi,
        bahan: req.body.bahan,
        gambar: req.body.gambar,
        video: req.body.video,
        instruksi: req.body.instruksi,
        kategori: req.body.kategori,
        subKategori: req.body.subKategori,
        userId: req.body.userId
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
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Not found"
            })
        }
    }).catch(error=>{
        res.status(500).json({
            message:"something wrong!"
        })
    })
}

function getAll(req,res){
    models.resep.findAll().then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Not found"
            })
        }
    }).catch(error=>{
        res.status(500).json({
            message:"something wrong!"
        })
    })
}

function update(req,res){
    const id = req.params.id;
    const resepUpdate = {
        nama_resep: req.body.nama_resep,
        deskripsi: req.body.deskripsi,
        bahan: req.body.bahan,
        gambar: req.body.gambar,
        video: req.body.video,
        instruksi: req.body.instruksi,
        kategori: req.body.kategori,
        subKategori: req.body.subKategori
    }

    models.resep.update(resepUpdate, {where: {id:id}}).then(result => {
        if(result){
            res.status(200).json({
                message: "resep Updated",
                resep:result
            });
        }else{
            res.status(404).json({
                message: "Not found"
            })
        }
    }).catch(error=>{
        res.status(500).json({
            message:"something wrong!"
        })
    })

}

function destroy(req, res) {
    const id = req.params.id;

    models.resep.destroy({ where: { id: id } })
        .then(result => {
            res.status(200).json({
                message: "resep deleted",
                resep: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "something wrong!"
            });
        });
}

module.exports ={
    create:create,
    getOne:getOne,
    getAll:getAll,
    update:update,
    destroy:destroy,
}