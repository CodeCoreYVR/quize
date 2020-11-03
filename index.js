const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(logger('dev'));
app.set('view engine', 'ejs');

app.set('views', 'views');


app.get('/sign_in', (req, res) => {
    const query = req.query;
    console.log(req.query);
res.render('home');
});

app.get('/', (req, res) => {
    console.log(req.query);
res.render('home');
});


 const PORT = 3000;
 const ADRESS = 'localhost';
 app.listen(PORT, ADRESS, () => {
     console.log(`app is listening at ${ADRESS}:${PORT}`);
 });