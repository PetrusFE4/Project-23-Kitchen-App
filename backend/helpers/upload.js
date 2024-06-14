// SCRIPT GPT SAMA YOUTUBE SAMA
const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Tentukan direktori penyimpanan file, dari folder uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Tentukan nama file
    }
});

// Filter file untuk memastikan hanya gambar yang diupload
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Batas ukuran file 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;