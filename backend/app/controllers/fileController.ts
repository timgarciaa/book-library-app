import { NextFunction, Request, Response } from "express";
import fileService from "../services/fileService";
import { FileRecord } from "@prisma/client";

async function createFile(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const fileRecord: FileRecord = req.body;
    const result = await fileService.createFileRecord(fileRecord);
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

async function getFile(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const id = req.query.id;
    const result = await fileService.getFileRecord(Number(id));
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

async function updateFile(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const fileRecord: FileRecord = req.body;
    const result = await fileService.updateFileRecord(fileRecord);
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

async function deleteFile(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const id = req.query.id;
    const result = await fileService.deleteFileRecord(Number(id));
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

async function getFiles(req: Request, res: Response, next: NextFunction) {
  const jsonResponse: any = {};
  try {
    const result = await fileService.getFileRecords();
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

export { createFile, getFile, updateFile, deleteFile, getFiles };
