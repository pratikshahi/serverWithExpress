//jshint esversion:6

const { request } = require("express");
const express = require("express"); //incoprating express to file
//  express function into app
const app = express();
//send to browser// "/" refers to Home Route
app.get("/", function (req, res) {
    res.send("<h1>Hello world!</h1>");
});
app.get("/contact", function (req, res) {
    res.send("Contact me: shahipr0@gmail.com");
});
//localhost:3000/aboutme
app.get("/aboutMe", function (req, res) {
    res.send("My name is pratik shahi. I am a computer engineer");
});
app.get("/hobbies",function(req,res){
    res.send("<ul><li>code</li><li>coffee</li><li>football</li></ul>");
});
//listen method //3000 is port listening to
app.listen(3000, function () {
    console.log("server started on port 3000");
});
