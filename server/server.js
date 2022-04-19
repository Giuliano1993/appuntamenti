const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/appuntamenti.db');
//import { open } from 'sqlite'

app.listen(port)


app.get('/', function(req, res){
    console.log(req)
    console.log(res)
    res.send('This is the home page!');
})
app.post('/appuntamento', function(req, res){
    console.log('llllll')
    db.serialize(() => {
        
    
        const stmt = db.prepare("INSERT INTO appuntamenti VALUES (?,?,?)");
        for (let i = 0; i < 10; i++) {
            //stmt.run("Ipsum " + i);
            let date_ob = new Date();

            stmt.run([`Appuntamento ${i}`,`dico cose su app ${i}`,date_ob.getTime()]);
        }
        stmt.finalize();
        
        /*db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
            console.log(row.id + ": " + row.info);
        });*/
    });
    
    db.close();
    res.send('success');
})