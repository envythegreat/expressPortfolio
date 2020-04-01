//require express module
const express = require('express');
const app = express();
//use a static route and the express.static method to serve the static files located in the public folder
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
// Using the pug engine
app.set('view engine', 'pug');


//import routes
const defaultRouter = require('./routes');
const aboutsRouter = require('./routes/about');
const projectRouter = require('./routes/project');
//using path's and rendring the pages
app.use(defaultRouter);
app.use(aboutsRouter);
app.use(projectRouter);

//Error handling for non-exist pages
app.use((req, res, next)=>{
    const err = new Error('Not found');
    err.status = 404;
    console.log(err);
    next(err);
})
// Error middleware
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})
//start the server.
app.listen(3000, ()=>{
    console.log('The app is running at 30000');
})