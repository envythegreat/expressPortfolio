const express = require('express');
const app = express();
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');



const defaultRouter = require('./routes');
const aboutsRouter = require('./routes/about');
const projectRouter = require('./routes/project');
app.use(defaultRouter);
app.use(aboutsRouter);
app.use(projectRouter);

app.use((req, res, next)=>{
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})

app.listen(3000, ()=>{
    console.log('The app is running at 30000');
})