// to use express simply create constant variable and import express package 

const express = require('express');

// first create express object

const app =express();

app.use(express.json());
// express.json convert unreadble data into js object

// create server and run it

app.listen(8000, ()=>{
    console.log("hello neha");
})


app.get("/new", (req,res)=> {
    res.send("good night🌃");
})

app.post("/create", (req,res)=>{

    console.log(req.body);
    res.send("mornnning!!!!!")
})
// 👆 app.listen= command to create and run server on given port no and execute function to show whether its running perfectly

// types of requests
// GET=get data
// POST= create data / send data as client
// PUT= create or update data
// PATCH=simply update
// DELETE= delete data

// headers are extra info sending related to res or req
// content-type is a header used when we send some data from client to server