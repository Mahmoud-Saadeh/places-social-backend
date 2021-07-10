const express = require('express');
const placesControllers = require('../controllers/places-controller');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);
router.get('/', placesControllers.getPlaces);
router.use(checkAuth);

router.post(
  '/',
  // fileUpload.single('imagePlace'),
  // [
  //   check('title').not().isEmpty(),
  //   check('description').isLength({ min: 5 }),
  //   check('address').not().isEmpty(),
  // ],
  placesControllers.createPlace
);
router.patch('/:pid/likes', placesControllers.likePost);

router.patch(
  '/:pid',
  [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
