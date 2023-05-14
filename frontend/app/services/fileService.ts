import axios from "axios";
import { FileRecord } from "../types/FileRecord";

export async function getFiles() {
  const record = await axios.get("http://localhost:7101/file/files");

  return record.data.data;
}

export async function createFile(name: string, folderRecordId: number) {
  const record = await axios.post("http://localhost:7101/file", {
    name,
    folderRecordId,
  });
  return record.data.data;
}

export async function updateFile({ id, name, folderRecordId }: FileRecord) {
  const record = await axios.put("http://localhost:7101/file", {
    id,
    name,
    folderRecordId,
  });

  return record.data.data;
}

export async function deleteFile({ id }: FileRecord) {
  await axios.delete(`http://localhost:7101/file?id=${id}`);
}
