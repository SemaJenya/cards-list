const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get('serverPort');
console.log(PORT);

const start = () => {
    try {
        

        app.listen()
    } catch  {
        console.log('error');
        
    }
}