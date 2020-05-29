const WebSocket = require('ws')
const wss = new WebSocket.Server({
	port: 8080,
	perMessageDeflate: false,
})

wss.on('connection', (ws, request, client) => {
	console.log('A new connection established!')
	ws.on('message', (msg) => {
		console.log(`Reseived a new message : ${msg}`)
		ws.send(`Send back:${msg}`)
	})
})
