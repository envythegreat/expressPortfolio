const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/projects', (req, res) => {
    res.render('project', { project: projects[0] });
})
module.exports = router;