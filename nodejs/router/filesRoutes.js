const fs = require('fs');
const express = require('express')
const router = express.Router()

import { upload } from "../helpers/storageHelper";
import { fileChecker } from "../helpers/fileHelper";
import ipfs from "../clients/ipfsClient";

router.get('/', function(req, res) {
    res.send('Upload endpoint!');
});

router.post('/', upload.single('file'), async (req, res) => {
    fileChecker(req, res)

    const data = fs.readFileSync(req.file.path);
    const source = ipfs.add(data);

    try {
        for await (const file of source) {
            fs.unlink(req.file.path, () => {});
            const {path, size} = file;
            res.status(201).send({path, size})
        }
    } catch (err) {
        console.error(err)
        return 'error'
    }
});

export default router
