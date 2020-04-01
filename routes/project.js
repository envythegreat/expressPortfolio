const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');
const { myinfo } = require('../data/profile.json');
router.get('/projects/:id', (req, res) => {
    const {id} = req.params;
    res.render('project', { project: projects[id], myinfo });
})
module.exports = router;