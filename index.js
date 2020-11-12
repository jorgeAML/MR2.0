const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const info = require('./global_objects/globalOne').info;

let app = express();
//using Morgan
app.use(morgan('combined'));
//Setting the name of the project
app.set('appName', 'Medicina Resources 2021');

app.set('port', process.env.PORT || 1704);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//include files
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', (req, res) => {
    res.render('index', {msg:'Welcome to Medicina Resources'});
});

http.createServer(app).listen(app.get('port'), () => {
    console.log(`Express server is listening on port ${app.get('port')}`);
    
});
