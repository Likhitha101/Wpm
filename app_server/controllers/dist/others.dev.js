"use strict";

/* GET 'about' page */
var about = function about(req, res) {
  res.render('index', {
    title: 'About'
  });
};

module.exports = {
  about: about
};