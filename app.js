const express = require('express')
const app = express()
let port = 3000
const request = require('request')

app.set("view engine", 'ejs')

app.get("/results", (req, res)=>{
    let query = req.query.search
    let url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200) {
            let data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
})

app.get("/", (req, res) => {
    res.render('search')
})


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))