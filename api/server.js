const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Jackets = require('./models/jackets.js');
const cors = require('cors');

require('dotenv').config();
require('./config/database.js');

app.use(express.json());
app.use(cors());

app.post('/jackets', (req, res)=>{
    Jackets.create(req.body)
    .then((createdJacket)=>{
        res.json(createdJacket)
    })
});

app.get('/jackets', (req, res)=>{
    Jackets.find({})
    .then((foundJackets) => {
        res.json(foundJackets)
    })
});

app.delete('/jackets/:id', (req, res)=>{
    Jackets.findByIdAndRemove(req.params.id)
    .then((deletedJacket)=> {
        res.json(deletedJacket)
    })
});

app.put('/jackets/:id', (req, res)=>{
    Jackets.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedJacket)=>res.json(updatedJacket))
});

app.listen(3001, ()=>{
    console.log('listening...');
});

mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});