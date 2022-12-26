const express = require('express');
const app = express();
const routers = require('./routes')
const port = process.env.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use('/', routers);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
