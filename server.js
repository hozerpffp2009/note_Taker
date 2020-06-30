const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5555;
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./db.json"));
  });

  app.get('/api/notes/:id', (req, res) => {
      let saved = JSON.parse(fs.readFileSync("./db.json"));
    res.json(saved);
  });