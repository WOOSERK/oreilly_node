const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');

exports.sectionTest = (req, res) => res.render('section-test');

exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() });

exports.notFound = (req, res) => res.render('404');

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => {
  console.error(err);
  res.render('500');
};
/* eslint-disable no-unused-vars */