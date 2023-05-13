import { FolderRecord, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createFolder({
  name,
  parentId,
}: FolderRecord): Promise<FolderRecord> {
  return await prisma.folderRecord.create({
    data: {
      name,
      parentId,
    },
  });
}

async function getFolder(id: number) {
  return await prisma.folderRecord.findUnique({
    where: {
      id,
    },
  });
}

async function updateFolder({id, name, parentId}: FolderRecord) {
  const record = await prisma.folderRecord.update({
    where: {
      id,
    },
    data: {
      name,
      parentId,
    },
  });

  return record;
}

async function deleteFolder(id: number) {
  await prisma.folderRecord.delete({
    where: {
      id,
    },
  });
}

async function getFolderRecords() {
  return await prisma.folderRecord.findMany();
}


async function getFolderInformation(folderId: number) {
 
    const childFolders = await prisma.folderRecord.findMany({
      where: {
        parentId: folderId,
      },
    })
  
    const childFiles = await prisma.fileRecord.findMany({
      where: {
        folderRecordId: folderId,
      },
    })
  

    const parentFolders: FolderRecord[] = []
    let parentFolder = await prisma.folderRecord.findUnique({
      where: {
        id: folderId,
      },
    })
  
    while (parentFolder?.parentId != null) {
      parentFolder = await prisma.folderRecord.findUnique({
        where: {
          id: parentFolder.parentId,
        },
      });
      if (parentFolder) {
        parentFolders.push(parentFolder);
      }
    }
  
    const output = {
      folderRecord: await prisma.folderRecord.findUnique({
        where: {
          id: folderId,
        },
      }),
      childFolders: childFolders,
      childFiles: childFiles,
      parentFolders: parentFolders,
    }
  
    console.log(output)
    return output;
}

export default {
  createFolder,
  getFolder,
  updateFolder,
  deleteFolder,
  getFolderRecords,
  getFolderInformation,
};
