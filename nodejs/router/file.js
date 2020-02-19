const express = require('express')
const router = express.Router()

const auth = require("@/middleware/auth");
import { uploader } from "@/api/file/helper/storageHelper";
import { uploadIpfs } from "@/api/file/handler";

router.get('/file', auth, function(req, res) {
    res.send('Upload endpoint!');
});

router.post('/file', auth, uploader, uploadIpfs);

module.exports = router
