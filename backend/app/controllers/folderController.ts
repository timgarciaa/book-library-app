import { NextFunction, Request, Response } from "express";
import folderService from "../services/folderService";
import { FolderRecord } from "@prisma/client";

async function createFolder(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const folderRecord: FolderRecord = req.body;
    const result = await folderService.createFolder(folderRecord);
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

async function getFolder(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const id = req.query.id;
    const result = await folderService.getFolder(Number(id));
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

async function updateFolder(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const folderRecord: FolderRecord = req.body;
    const result = await folderService.updateFolder(folderRecord);
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

async function deleteFolder(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const id = req.query.id;
    const result = await folderService.deleteFolder(Number(id));
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

async function getFolders(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const result = await folderService.getFolderRecords();
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

async function getFolderInformation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const jsonResponse: any = {};
  try {
    const id = req.query.id;
    const result = await folderService.getFolderInformation(Number(id));
    jsonResponse.data = result;
    res.status(200).json(jsonResponse);
    next();
  } catch (e) {
    jsonResponse.error = true;
    jsonResponse.errorMessage = e;
    res.status(500).json(jsonResponse);
    next();
  }
}

export {
  createFolder,
  getFolder,
  updateFolder,
  deleteFolder,
  getFolders,
  getFolderInformation,
};
