const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3001;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.listen(port, "132.148.0.121", () => {
    console.log(`The Port is Running at ${port}`);
});
