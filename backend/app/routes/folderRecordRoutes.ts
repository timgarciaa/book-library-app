import { Router, Request, Response, NextFunction } from "express";
import {
  getFolder,
  createFolder,
  updateFolder,
  deleteFolder,
  getFolders,
  getFolderInformation,
} from "../controllers/folderController";

const router: Router = Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  getFolder(req, res, next);
});

router.post("/", function (req: Request, res: Response, next: NextFunction) {
  createFolder(req, res, next);
});

router.put("/", function (req: Request, res: Response, next: NextFunction) {
  updateFolder(req, res, next);
});

router.delete("/", function (req: Request, res: Response, next: NextFunction) {
  deleteFolder(req, res, next);
});

router.get("/information", function (req: Request, res: Response, next: NextFunction) {
  getFolderInformation(req, res, next);
});

router.get(
  "/folders",
  function (req: Request, res: Response, next: NextFunction) {
    getFolders(req, res, next);
  }
);

export default router;
