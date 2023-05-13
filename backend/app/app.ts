import express, { NextFunction, Request, Response } from "express";
import api from "./routes";

const app = express();

app.use(express.json());

app.use(api);

const port = process.env.SERVICE_PORT || 7101;
app.listen(port, function() {
  console.log('node server started at ' + port);
});