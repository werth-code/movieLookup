const express = require('express')
const app = express()
let port = 3000
const request = require('request')

app.get("/results", (req, res)=>{
    request("http://www.omdbapi.com/?s=fugitive&apikey=thewdb", (error, response, body)=>{
        if(!error && response.statusCode === 200) {
            let results = JSON.parse(body);
            res.send(results["Search"]);
        }
    });
})


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))