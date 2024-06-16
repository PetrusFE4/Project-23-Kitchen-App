const models = require("../models");

function create(req, res) {
  const daftarbelanja = {
    userId: req.body.userId,
  };

  models.daftarBelanja
    .create(daftarbelanja)
    .then((result) => {
      res.status(200).json({
        message: "daftar created successfuly",
        daftarBelanja: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something wrong",
        error: error,
      });
    });
}

function update(req, res) {
  const daftarbelanjaUpdate = {
    userId: req.body.userId,
    content: req.body.content,
  };
  models.daftarBelanja
    .update(daftarbelanjaUpdate, {
      where: { userId: daftarbelanjaUpdate.userId },
    })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "daftar Updated",
          daftarBelanja: daftarbelanjaUpdate,
        });
      } else {
        res.status(404).json({
          message: "Not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "error",
      });
    });
}

function getDaftar(req, res) {
  const userId = req.body.userId;
  models.daftarBelanja
    .findAll({
      where: {
        userId: userId,
      },
    })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "something wrong!",
      });
    });
}

module.exports = {
  create: create,
  update: update,
  getDaftar: getDaftar,
};
