const express = require('express');
const Cookies = require('cookies')

const router = express.Router();

// Optionally define keys to sign cookie values
// to prevent client tampering
const keys = ['keyboard cat']


router.get('/', function (req, res) {
  const cookies = new Cookies(req, res, { keys: keys })

  // Get the cookie
  const lastVisit = cookies.get('LastVisit', { signed: true })

  if (!lastVisit) {
    // Set the cookie with expiration time 10 seconds (for testing)
    cookies.set('LastVisit', new Date().toISOString(), { signed: true, maxAge: 10*1000 });
    res.render('firstvisit', {title: 'Firt visit with cookie', firstvisit: true});
  }
  else
    res.render('firstvisit', { title: 'Firt visit with cookie', firstvisit: false });
});



module.exports = router;
