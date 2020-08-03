const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')
const os = require('os')

const app = express()

app.use(express.static('./public'))

app.use('/test', (req, res) => {
	// console.log(os)
	console.log(os.type())
	console.log(os.platform())
	console.log(os.arch())
	console.log(os.cpus())
	console.log(os.uptime())
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

app.use('/test_helmet', (req, res) => {
	// 为你的网站带上帽子 — 使用 helmet 保护 Express 应用
	// https://juejin.im/post/5a24fd8f51882509e5438247
	res.send('test_helmet')
})

app.use('/wxlink', (req, res) => {
	console.log('收到请求-', new Date());
	res.redirect('https://www.baidu.com');
})

const privateKey = fs.readFileSync(path.join(__dirname, './pathway/private.pem'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './pathway/file.crt'), 'utf8')
const credentials = {key: privateKey, cert: certificate}

const httpsServer = https.createServer(credentials, app)
const SSlPORT = 8001

// httpsServer.listen(SSlPORT, '0.0.0.0', () => {
//   console.log(`https listen ${SSlPORT}`);
// })

app.listen(SSlPORT, () => {
	console.log(`http listen ${SSlPORT}`);
})


// ===============================================================================================
