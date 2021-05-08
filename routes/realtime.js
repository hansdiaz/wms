let express = require('express');
let router = express.Router();
const firebase = require('firebase');

router.get('/', function(req, res, next) {
    res.render('Template/template', {
        Page_Content: 'Realtime',
        title: 'Real-time Update | WMS',
        pageTitle: 'Real Time Update',
        profile: req.session.user
    });
});

module.exports = router;