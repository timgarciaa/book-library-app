import { Router, Response, Request, NextFunction } from "express";

import folderRecordRoutes from "./folderRecordRoutes";
import fileRecordRoutes from "./fileRecordRoutes";

const api: Router = Router();

api.get("/health", function (req: Request, res: Response) {
  res.send("Health Check.");
});

api.use("/folder", folderRecordRoutes);

api.use("/file", fileRecordRoutes);

export default api;
