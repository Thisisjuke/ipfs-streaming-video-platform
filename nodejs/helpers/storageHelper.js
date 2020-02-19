const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(path.dirname(require.main.filename || process.mainModule.filename), 'uploads'));
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
    },
});

const upload = multer({ storage });

export { storage, upload }
