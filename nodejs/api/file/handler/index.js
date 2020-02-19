const fs = require('fs');
import ipfs from "@/config/ipfs";
import { fileChecker } from "../helper/fileHelper";

const uploadIpfs = async (req, res) => {
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
}

export { uploadIpfs }
