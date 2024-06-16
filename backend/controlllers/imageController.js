// SCRIPT DARI YOUTUBE
function uploadImage(req, res) {
  if (req.file.filename) {
    res.status(201).json({
      message: "Gambar berhasil di unggah!",
      url: req.file.filename,
    });
  } else {
    res.status(500).json({
      message: "Terjadi kesalahan!",
    });
  }
}

module.exports = {
  uploadImage: uploadImage,
};

// SCRIPT DARI GPT
/* exports.uploadImage = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const filename = req.file.filename;

    res.status(200).json({
        message: 'File uploaded successfully',
        filename: filename
    });
}; */
