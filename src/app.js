'use strict'
const express = require('express')
const app = express()
const path = require('path')
const { port } = require('./setting')
const { HeaderError } = require('./middlewares')
const { routerBook, routerHome, routerAuth } = require('./router')
const expressLayout = require('express-ejs-layouts')
const passport = require('passport')
const session = require('express-session')
const morgan = require('morgan')

passport.serializeUser((user, done)=>{
    done(null, user.id )
});

passport.deserializeUser((id, done)=>{
    Use
});

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayout);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(routerBook);
app.use(routerHome);
app.use(routerAuth);
app.use(HeaderError.Error404);


app.listen(port, ()=>{
    console.log(`listen to port:${port}`)
})