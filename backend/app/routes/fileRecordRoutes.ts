import { Router, Request, Response, NextFunction } from "express";
import {
  createFile,
  deleteFile,
  getFile,
  getFiles,
  updateFile,
} from "../controllers/fileController";

const router: Router = Router();

router.post("/", function (req: Request, res: Response, next: NextFunction) {
  createFile(req, res, next);
});

router.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    getFile(req, res, next);
  }
);

router.put("/", function (req: Request, res: Response, next: NextFunction) {
  updateFile(req, res, next);
});

router.delete("/", function (req: Request, res: Response, next: NextFunction) {
  deleteFile(req, res, next);
})

router.get(
  "/files",
  function (req: Request, res: Response, next: NextFunction) {
    getFiles(req, res, next);
  }
);

export default router;
