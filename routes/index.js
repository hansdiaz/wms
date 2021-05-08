let express = require('express');
let router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyAId5U8P5nDEhytscOGupt7yymM9R0Gdsc",
  authDomain: "wildlife-monitoring-system.firebaseapp.com",
  databaseURL: "https://wildlife-monitoring-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wildlife-monitoring-system",
  storageBucket: "wildlife-monitoring-system.appspot.com",
  messagingSenderId: "345584392239",
  appId: "1:345584392239:web:1588fc68d350da6ecc4eda",
  measurementId: "G-1MER911JKD"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


router.get('/', function(req, res, next) {
  res.render('Login/login', {
    title: 'Login|WMS',
    message: ''
  });
});


router.post( '/login', function(req, res){
  let email = req.body.txtEmail;
  let password = req.body.txtPassword;

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        req.session.user = user;

        console.log(user.email)
        console.log(user.uid)

        res.render('Template/template', {
          Page_Content: 'Homepage',
          title: 'Dashboard | WMS',
          pageTitle: 'Analytics',
          profile: req.session.user
        });

      })
      .catch((error) => {
        res.render('Login/login', {
          title: 'Login|WMS',
          message: error.message
        });
      });
});

router.get('/logout', function(req, res, next) {

    if(req.session.user){

        firebase.auth().signOut().then(function () {
            req.session.destroy();

            res.render('Login/login', {
                message: 'Please login!.',
                title: 'Login|WMS',
            });

        }).catch(function (error) {
            res.render('Login/login', {
                message: error.message,
                title: 'Login|WMS'
            });
        });

    }else{
        res.render('Login/login', {
            message: 'Please login!.',
            title: 'Login|WMS'
        });
    }

});

module.exports = router;
