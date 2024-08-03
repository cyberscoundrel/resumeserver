const fs = require('fs')
const express = require('express')
const app = express()
const port = 80
const path = require('path')

var https = require('https');
var privateKey  = fs.readFileSync('./private.key', 'utf8');
var certificate = fs.readFileSync('./certificate.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443)
