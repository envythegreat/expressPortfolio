const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/projects:id', (req, res) => {
    res.render('project', );
})
module.exports = router;