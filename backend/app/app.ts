import express, { NextFunction, Request, Response } from "express";
import api from "./routes";

const app = express();

// CORS Policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use(express.json());

app.use(api);

const port = process.env.SERVICE_PORT || 7101;
app.listen(port, function() {
  console.log('node server started at ' + port);
});