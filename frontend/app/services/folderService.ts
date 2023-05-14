import axios from "axios";

export async function getFolders() {
  const record = await axios.get("http://localhost:7101/folder");

  return record.data.data;
}

export async function getFolderInformation(id: number) {
  const record = await axios.get(
    `http://localhost:7101/folder/information?id=${id}`
  );

  return record.data.data;
}

export async function createFolder(name: string, parentId: number) {
  return await axios.post(`http://localhost:7101/folder`, {
    name,
    parentId,
  });
}
