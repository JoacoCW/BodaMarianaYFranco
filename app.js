const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded( {extended: false}));
app.use(express.json());
app.use('/', userRouter);


app.listen(3000, function(){
    console.log('Server running in 3000 port')
    console.log('http://localhost:3000')
})