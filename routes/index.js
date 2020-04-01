const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


router.get('/', (req, res) => {
    res.render('index', { project: projects[0], allProject:projects });
})
module.exports = router;