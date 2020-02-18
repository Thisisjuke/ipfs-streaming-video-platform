const ipfsClient = require('ipfs-http-client');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();
require('dotenv').config()

const storage = multer.diskStorage({
 destination(req, file, cb) {
  cb(null, path.join(__dirname, 'uploads'));
 },
 filename(req, file, cb) {
  cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
 },
});

const upload = multer({ storage });

const ipfs = ipfsClient({
 host: 'localhost',
 port: '5001',
});

app.get('/', function(req, res) {
 res.send('Upload endpoint!');
});

app.post('/', upload.single('file'), async (req, res) => {
 if (!req.file) {
  return res.status(422).json({
   error: 'File needs to be provided.',
  });
 }

 const mime = req.file.mimetype;
 if (mime.split('/')[0] !== 'image') {
  fs.unlink(req.file.path, () => {});

  return res.status(422).json({
   error: 'File needs to be an image.',
  });
 }

 const fileSize = req.file.size;
 if (fileSize > process.env.MAX_UPLOAD_SIZE) {
  fs.unlink(req.file.path, () => {});

  return res.status(422).json({
   error: `Image needs to be smaller than ${MAX_SIZE} bytes.`,
  });
 }

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

app.listen(process.env.APPLICATION_PORT, () => console.log(`application on port : ${process.env.APPLICATION_PORT}`));
