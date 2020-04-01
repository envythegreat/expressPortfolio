const express = require('express');
const router = express.Router();
const { myinfo } = require('../data/profile.json');
router.get('/about', (req, res) => {
    // console.log(myinfo)
    res.render('about', { myinfo })
})

module.exports = router;
