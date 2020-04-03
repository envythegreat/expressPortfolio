//require express module
const express = require('express');
const router = express.Router();
// require the json data needed
const { projects } = require('../data/data.json');
const { myinfo } = require('../data/profile.json');
function findId(id) {
    return projects.filter( projects => { return projects.id == id ? true : false } );
}
// Set your routes to render a project page based on the parameter in the URL given
router.get('/projects/:id', (req, res, next) => {
    // capturing data from the url (:id) using the req.params method
    const {id} = req.params;
    const newID = findId(id);
    if(newID == ""){
        const err = new Error('Not found');
        err.status = 404;
        next(err)
    }else{
        res.render('project', { 
        // using the json data in project pug pages
        project: projects[id], 
        myinfo
    });}
    
})
module.exports = router;