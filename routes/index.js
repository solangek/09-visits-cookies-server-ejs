const express = require('express');
//const Cookies = require('cookies')

const router = express.Router();

// Optionally define keys to sign cookie values
// to prevent client tampering
//const keys = ['keyboard cat']


const firstMessage = 'Firt visit with cookie';
router.get('/', function (req, res) {

  // Get the cookie
  const lastVisit = req.cookies.LastVisit;

  if (!lastVisit) {
    // Set the cookie with expiration time 20 seconds (for testing)
    res.cookie('LastVisit', new Date().toISOString(), { maxAge: 20*1000 });
    //cookies.set('LastVisit', new Date().toISOString(), { signed: true, maxAge: 10*1000 });
    res.render('firstvisit', {title: firstMessage, firstvisit: true});
  }
  else
    res.render('firstvisit', { title: firstMessage, firstvisit: false });
});



module.exports = router;
