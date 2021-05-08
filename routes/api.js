let express = require('express');
let router = express.Router();
const firebase = require('firebase');
const firebaseDatabase = require('firebase/database');

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

let database = firebase.database();

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

router.get('/', function(req, res, next) {
    res.status(200).send('one');
});

router.get('/setStatus', function(req, res, next) {

    database.ref().child('WB').child('WB1').limitToLast(1).get().then((snapshot) => {
            if (snapshot.exists()) {

                snapshot.forEach((child) => {

                    if(child.val().altitude < 1250){
                        res.status(200).json(child.val().altitude);
                    }else{
                        res.status(200).json(child.val().altitude);
                    }
                });


            } else {
                console.log("No data available");
            }

    });
});





module.exports = router;