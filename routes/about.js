const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');
router.get('/about', (req, res) => {
    res.render('about',{ project: projects[0] })
})

module.exports = router;
