import axios from 'axios';

export async function getFiles() {
  const record = await axios.get('http://localhost:7101/file/files');

  return record.data.data;
}