const express = require('express');
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require('multer');

const { auth } = require("../middleware/auth");

var storage = multer.diskStorage({
    destination: (req, file, db) => {
        db(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        db(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jqg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file");

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {

    // after getting that image from client
    // we need to save it inside Node Serve
});

//uploadImage

module.exports = router;
