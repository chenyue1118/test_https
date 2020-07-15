const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const app = express()

app.use(express.static('./public'))

app.use('/test', (req, res) => {
	const query = req.query
	console.log('query', query)
	res.send({"statue": true})
})

const privateKey = fs.readFileSync(path.join(__dirname, './pathway/private.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './pathway/file.crt'), 'utf8')
const credentials = {key: privateKey, cert: certificate}

const httpsServer = https.createServer(credentials, app)
const SSlPORT = 8001

httpsServer.listen(SSlPORT, () => {
  console.log(`https listen ${SSlPORT}`);
})


// ===============================================================================================
