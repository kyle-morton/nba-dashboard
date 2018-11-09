let express = require('express'),
    app = express(),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config');

let port = process.env.PORT || 3000;
mongoose.connect(config.database, { useNewUrlParser: true });

//use morgan for logging requests
app.use(morgan('dev'));

//configure routes, cors, body-parser
require('./router-config')(app, express);

//start-up
app.listen(port);
console.log('server listening on http://localhost:' + port);