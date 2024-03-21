const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title></title></head>");
	res.write("<body>Hello</body>");
	res.write("</html>");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
