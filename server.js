// Load required modules
const http = require("http"); // http server core module
const path = require("path");
const express = require("express"); // web framework external module

const port = process.env.PORT || 8080;
const app = express();
app.use(express.static("public"));
const webServer = http.createServer(app);

webServer.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});