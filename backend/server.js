const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser= require('body-parser')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const patientsRouter = require('./routes/patients');
const hospitalsRouter = require('./routes/hospitals');

app.use('/patients', patientsRouter);
app.use('/hospitals', hospitalsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});