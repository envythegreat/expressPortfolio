const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');
const { myinfo } = require('../data/profile.json');

router.get('/', (req, res) => {
    res.render('index', { project: projects[0], allProject:projects, myinfo });
})
module.exports = router;