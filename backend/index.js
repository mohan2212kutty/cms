const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload')



//import model for admin config


//import keys from keys.js
const keys = require('./config/keys');


//import keys for db config from keys.js
mongoose.connect(keys.mongoURI);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', () => {
    console.log("Successfully connected to the database");
});
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());



//import aminlogin route form adminlogin
require('./routes/userRegister')(app);
require('./routes/userLogin')(app);
require('./routes/newContentType')(app);
require('./routes/Entries')(app);
require('./routes/contentTypes')(app);

/*
app.post('/upload', (req, res, next) => {
  console.log(req);
  let fileUpload = req.files.file;

  fileUpload.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

}) */



app.get('/', (req, res) => {
	res.send('the app is wotking')
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('the srver is runing on port:' + PORT)
});

// FileUploader 




