const express = require('express');
const mongoose = require('mongoose');
const {Expense} = require('./schema.js') 

const app = express();

async function connectToDb() {
    try {

        await mongoose.connect('mongodb+srv://sri-246:Atlasdb24@cluster0.wndurhh.mongodb.net/?retryWrites=true&w=majority')
        console.log('DB connection established ;)')

        const port = 4000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t establish connection :(')
    }
}
connectToDb()
