var express=require("express");
var app=express();

app.use(express.static(__dirname + "/static"));

app.get("/", function(req,res) {
	res.sendFile(__dirname + "/index.html")
});

app.get("/newpage", function(req,res) {
	res.sendFile(__dirname + "/newpage.html")
});

var port=process.env.PORT;

app.listen(port||8080);
console.log("server is running");