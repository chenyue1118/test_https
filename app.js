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

app.use('/test_ip', (req, res) => {
	// 判断是否有反向代理 IP 、判断 connection 的远程 IP 、 判断后端的 socket 的 IP
	const Ips = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
	try {
		console.log(`req.headers['x-forwarded-for']`, req.headers['x-forwarded-for'])
		console.log(`req.connection.remoteAddress`, req.connection.remoteAddress)
		console.log(`req.socket.remoteAddress`, req.socket.remoteAddress)
		console.log(`req.connection.socket.remoteAddress`, req.connection.socket.remoteAddress)
	} catch (e) {
		console.log(e)
	}
	res.send({
		ip: Ips
	})
})

const privateKey = fs.readFileSync(path.join(__dirname, './pathway/private.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './pathway/file.crt'), 'utf8')
const credentials = {key: privateKey, cert: certificate}

const httpsServer = https.createServer(credentials, app)
const SSlPORT = 8001

httpsServer.listen(SSlPORT, '0.0.0.0', () => {
  console.log(`https listen ${SSlPORT}`);
})


// ===============================================================================================
