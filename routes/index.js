//require express module
const express = require('express');
const router = express.Router();
// require the json data needed
const { projects } = require('../data/data.json');
const { myinfo } = require('../data/profile.json');
// Set your routes to render the index page
router.get('/', (req, res) => {
    res.render('index', { 
        // using the json data in index and layout pug pages
        project: projects[0], 
        allProject:projects, 
        myinfo 
    });
})
// exporting the router so we can use it in the app.js
module.exports = router;