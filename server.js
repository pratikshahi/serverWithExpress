//jshint esversion:6

const { request } = require("express");
const express=require("express"); //incoprating express to file
//  express function into app
const app=express();  
//send to browser
app.get("/",function(request,response){
    response.send("<h1>Hello world!</h1>");
});
              
//listen method //3000 is port listening to
app.listen(3000,function(){

    console.log("server started on port 3000");


});                  
