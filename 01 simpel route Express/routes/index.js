//  REQUESTEN HENTES I DENNE FIL
//  app er sendt med fra express
//  koden indeni module.exports bliver gemt og exporteret som et module
//  req = request og res = response



// module.exports = function(app){

//     app.get('/', function(req, res){
//         res.send("Nanna");

//     });

// };

// NB det er vigtigt at stoppe og genstarte node app i terminalen
// hver gang der laves ændringer

module.exports = function(app){
        //  '/' er et tomt route
        app.get('/', function(req, res){
        res.send("Nanna");

    });

    // husk at skrive /getuser i browseren efter 3333,
    // for at tilgå json-objektet i browser.
    app.get('/getuser', function(req, res){
        let jsonObject = {
            "navn" : "Nanna",
            "efternavn" : "Jensen"
        }

        res.send(jsonObject);
    });
};

