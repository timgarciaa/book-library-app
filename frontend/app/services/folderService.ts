import axios from 'axios';

export async function getFolders() {
  const record = await axios.get('http://localhost:7101/folder');

  return record.data.data;
}


export async function getFolderInformation() {
  const record = await axios.get('http://localhost:7101/folder/information?id=1');

  return record.data.data;
}