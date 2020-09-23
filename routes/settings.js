const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('settings/settings');
});

router.get('/birds', function (req, res, next) {
    res.render('settings/birds');
});

router.get('/meds', function (req, res, next) {
    res.render('settings/medicines');
});

router.get('/food-types', function (req, res, next) {
    res.render('settings/foodtypes');
});


module.exports = router;
