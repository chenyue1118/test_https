const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const app = express()

app.use(express.static('./public'))

const privateKey = fs.readFileSync(path.join(__dirname, './pathway/private.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './pathway/file.crt'), 'utf8')
const credentials = {key: privateKey, cert: certificate}

const httpsServer = https.createServer(credentials, app)
const SSlPORT = 8001

httpsServer.listen(8001, () => {
  console.log('https listen 8001');
})


// ===============================================================================================
