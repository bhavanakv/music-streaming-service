var express = require("express");
var app = express();
var open = require("open");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack.config");

const compiler = webpack(config);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(express.static("public"));

app.get("/*", (req, res) => {
    // Since we use React, the change of views will be handled
    // React, and the server should typically not care.
    res.sendFile(path.join(__dirname, "../src/index.html"));
}); 

app.listen(9090,(err,res) => {
    if(err) throw err;
    open("http://localhost:9090");
});
