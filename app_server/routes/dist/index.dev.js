"use strict";

var express = require('express');

var router = express.Router();

var ctrlLocations = require('../controllers/location');

var ctrlOthers = require('../controllers/others');
/* GET home page. */


router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  });
});
/* Locations pages */

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */

router.get('/about', ctrlOthers.about);
module.exports = router;