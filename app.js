const http = require("http");
const server = http.createServer(function (req, res) {
	console.log(req);
	res.send(req);
});
server.listen(3000);
