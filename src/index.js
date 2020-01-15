const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongDB (Não-relacional)
mongoose.connect('mongodb+srv://socramelorza:socram25@cluster0-tevkn.gcp.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333);