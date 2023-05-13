import { FileRecord, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createFileRecord({name, folderRecordId}: FileRecord) {
  console.log('fileRecord: ', name, ' folderRecorId: ', folderRecordId);
  const record = await prisma.fileRecord.create({
    data: {
      name,
      folderRecordId,
    },
  });

  return record;
}

async function getFileRecord(id: number) {
  return await prisma.fileRecord.findUnique({
    where: {
      id,
    },
  });
}

async function updateFileRecord({id, name, folderRecordId}: FileRecord) {
  const record = await prisma.fileRecord.update({
    where: {
      id,
    },
    data: {
      name: name,
      folderRecordId: folderRecordId,
    },
  });

  return record;
}

async function deleteFileRecord(id: number) {
  await prisma.fileRecord.delete({
    where: {
      id,
    },
  });
}

async function getFileRecords() {
  return await prisma.fileRecord.findMany();
}

async function getFileRecordsByParentId(folderRecordId: number) {
  return await prisma.fileRecord.findMany({
    where: {
      folderRecordId,
    }
  })
}

export default {
  createFileRecord,
  getFileRecord,
  updateFileRecord,
  deleteFileRecord,
  getFileRecords,
  getFileRecordsByParentId,
};
