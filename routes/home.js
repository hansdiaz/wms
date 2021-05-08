let express = require('express');
let router = express.Router();
const firebase = require('firebase');

router.get('/', function(req, res, next) {
    res.render('Template/template', {
        Page_Content: 'Homepage',
        title: 'Dashboard | WMS',
        pageTitle: 'Analytics',
        profile: req.session.user
    });
});

module.exports = router;