//require express module
const express = require('express');
const router = express.Router();
// require the json data needed
const { projects } = require('../data/data.json');
const { myinfo } = require('../data/profile.json');
// Set your routes to render a project page based on the parameter in the URL given
router.get('/projects/:id', (req, res) => {
    // capturing data from the url (:id) using the req.params method
    const {id} = req.params;
    // console.log(myinfo);
    
    res.render('project', { 
        // using the json data in project pug pages
        project: projects[id], 
        myinfo
    });
})
module.exports = router;