const fs = require('fs');

const fileChecker = async (req, res) => {
    if (!req.file) {
        return res.status(422).json({
            error: 'ERR_NO_FILE_PROVIDED',
            message: 'File needs to be provided.',
        });
    }

    const mime = req.file.mimetype;
    if (mime.split('/')[0] !== 'video') {
        fs.unlink(req.file.path, () => {});

        return res.status(422).json({
            error: 'ERR_INVALID_EXTENSION',
            message: 'Invalid extension.',
        });
    }

    const fileSize = req.file.size;
    if (fileSize > process.env.MAX_UPLOAD_SIZE) {
        fs.unlink(req.file.path, () => {});

        return res.status(422).json({
            error: 'ERR_MAX_SIZE_EXCEEDED',
            message: `Image needs to be smaller than ${process.env.MAX_UPLOAD_SIZE} bytes.`,
        });
    }
}

export { fileChecker }
