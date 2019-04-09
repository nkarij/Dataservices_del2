//  REQUESTEN HENTES I DENNE FIL
//  app er sendt med fra express
//  koden indeni module.exports bliver gemt og exporteret som et module
//  req = request og res = response

module.exports = function(app){

        //  denne route-metode giver tilladelse, så der ikke opstår
        // cors-fejl
        app.use('*', function(req, res, next) {

            res.header("Access-Control-Allow-Origin", "*");
            next();

        });

        // husk at skrive /getuser i browseren efter 3333,
        // for at tilgå json-objektet i browser.
        app.get('/getuser', function(req, res){
            // objectet skrives her
            let jsonObject = {
                "navn" : "Nanna",
                "efternavn" : "Jensen"
            }

            res.send(jsonObject);
        
        });
};


