const multer = require('multer');
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};
const { v1: uuidv1 } = require('uuid');
const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv1() + '.' + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid mim type!');
    cb(error, isValid);
  },
});
// const cloudinary = require('cloudinary').v2;

// function fileUpload(image) {
//   // cloudinary.config({
//   //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   //   api_key: process.env.CLOUDINARY_API_KEY,
//   //   api_secret: process.env.CLOUDINARY_API_SECRET,
//   //   // secure: true,
//   // });
//   cloudinary.config({
//     cloud_name: 'ms98',
//     api_key: '822252316194558',
//     api_secret: 'nl5hRq4MLxyTRphaXlA7Tctz3rM',
//   });
//   cloudinary.uploader.upload(
//     image,
//     { tags: 'basic_sample' },
//     function (err, image) {
//       console.log();
//       console.log('** File Upload');
//       if (err) {
//         console.warn(err);
//       }
//       console.log(
//         "* public_id for the uploaded image is generated by Cloudinary's service."
//       );
//       console.log('* ' + image.public_id);
//       console.log('* ' + image.url);
//       waitForAllUploads('pizza', err, image);
//     }
//   );
// }

module.exports = fileUpload;
