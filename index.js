const express = require('express');
const app = express();
const hbs = require('hbs');
const PUERTO = process.env.PORT || 3000
require('./hbs/hbs');


app.use(express.static( __dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs')

app.get('/',(req, res) => {
    res.render('home',{
        name : 'Omar'
    })
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.listen(PUERTO, ()=> {
    console.log(`Corriendo en el puerto ${PUERTO}`);
});