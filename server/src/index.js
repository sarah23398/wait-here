// JavaScript source code
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');
const router = require('./router');
const port = process.env.PORT || 8080;
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bearerToken())
    .use(router());

mongoose.connect("mongodb+srv://sarah:123sarah@werkout.7uapf.mongodb.net/wait-here?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Express server listening on port ${port}`);
        });
    });


