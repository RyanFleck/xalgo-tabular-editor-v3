/*
 * This is the backend of your new React-Express application.
 * A combination of React and Express, when deployed on Heroku,
 * is the fastest way to get a fully functional demo out the
 * door, and so, I've created this template to facilitate
 * just that. -rcf
 */

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import path from "path";
import dotenv from "dotenv";
import { User } from "./database.js";

// Load .env file into environment variables
dotenv.config();
const dev = process.env.DEVELOPMENT === "True" ? true : false;

// Set up express app, add helmet and bodyParser middleware
const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Resolve location of React frontend build
const dir = path.resolve();
const reactAppFile = path.join(dir, "frontend/build/index.html");
app.use(express.static(path.join(dir, "frontend/build")));

// Check for users in the database

/*
 * REQUEST RESPONSES SECTION
 */

app.get("/api/get", (req, res) => {
  console.log("Got an API request.");
  res.json({ "backend is up": true });
});

app.get("/api/get/users", (req, res) => {
  User.findAll().then((users) => res.json(users));
});

app.post("/api/post", (req, res) => {
  console.log(req.body);
  console.log(JSON.stringify(req.body));
  res.json({ "got it": true, "you sent": req.body.message });
});

app.post("/api/add/user", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    console.log(`Adding user with name ${req.body.name}`);
    User.create({ name: req.body.name }).then((u) => {
      res.json({ result: "Success" });
    });
  } else {
    res.json({ result: "Failure" });
  }
});

app.get("*", (req, res) => {
  console.log("Got a frontend request.");
  res.sendFile(reactAppFile);
});

// Start express server
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`System is listening on port ${port}`);
