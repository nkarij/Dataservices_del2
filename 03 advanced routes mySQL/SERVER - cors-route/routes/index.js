// REQUESTEN HENTES I DENNE FIL
// app er sendt med fra express i app.js
// koden indeni module.exports bliver gemt og exporteret som et 
// NB det er vigtigt at stoppe og genstarte node app i terminalen
// hver gang der laves ændringer

// NB 
const mysql = require('mysql2');

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'hifi corner'
});

// her gemmes database-resultatet i et module
module.exports = function (app) {

// eksempel på simpel route af text
// '/' betyder at url'en er tom, vises som default
    app.get('/', function (req, res) {
        res.send("Nanna")
    });

// route af JSON objekt
// husk at tilføje /getuser i browserens url
// og hele URL inkl /getuser i fetch
    app.get('/getUser', function (req, res) {
// JSON objektet skrives inde i app.get kommando
        let user = {
            "firstname": "Nanna",
            "lastname": "Jensen"
        }
        res.send(user)
    })

// her routes en kommando til databasen
// husk at tilføje /getAllUsers i browserens url
// og hele URL inkl /getAllUsers i fetch
    app.get('/getAllUsers', function (req, res) {
        db.query('SELECT * FROM products', function (err, rows) {
            if (err) {
                console.log(`fejl: ${err}`)
                console.log(rows);
                res.send(err)
            } else {
                res.send(rows)
            }
        })
    })
}



