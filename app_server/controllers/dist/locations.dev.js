"use strict";

/* GET 'home' page */
var homelist = function homelist(req, res) {
  res.render('index', {
    title: 'Home'
  });
};
/* GET 'Location info' page */


var locationInfo = function locationInfo(req, res) {
  res.render('index', {
    title: 'Location info'
  });
};
/* GET 'Add review' page */


var addReview = function addReview(req, res) {
  res.render('index', {
    title: 'Add review'
  });
};

module.exports = {
  homelist: homelist,
  locationInfo: locationInfo,
  addReview: addReview
};