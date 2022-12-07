const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');
const { connectDb, getDb } = require('./config/connectDB');

app.use(cors());
app.use('/img', express.static(path.join(__dirname, '/public/img')));
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
routes(app);
connectDb(app);
