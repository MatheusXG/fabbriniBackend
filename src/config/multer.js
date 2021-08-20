const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve('src/tmp/uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'src/tmp/uploads')
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('https://res.cloudinary.com/demo/image/upload/')}-${file.originalname}`

                cb(null, fileName)
            })
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    }, 
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/pjepg',
            //'file/pdf'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
          cb(new Error('Invalide file type.'))
        }
    }
}