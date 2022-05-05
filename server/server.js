const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const db = new sqlite3.Database('db/appuntamenti.db');
//import { open } from 'sqlite'

app.use(bodyParser.json()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', function(req, res){
    res.send('This is the home page!');
})
app.post('/appuntamento', function(req, res){
    console.log(req.body)
    var data = req.body
    db.serialize(() => {
        const stmt = db.prepare("INSERT INTO appuntamenti VALUES (?,?,?)");
        let date_ob = new Date();
        stmt.run([`${data.title}`,`${data.description}`,data.date]);
        stmt.finalize();
    });
    //db.close();
    res.sendStatus(200);
})


app.listen(port,()=>console.log(`the app is listening on port ${port}`))