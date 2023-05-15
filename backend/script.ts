
// for testing only

import { FolderRecord, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(folderId: number) {
  // const file = await prisma.fileRecord.create({data: {name: 'File1', folder: 2}})
  // console.log(file);

  // await prisma.fileRecord.deleteMany();
  // await prisma.folderRecord.deleteMany();

  // await prisma.folderRecord.create({
  //   data: {
  //     name: 'Folder1',
  //     parentId: 1,
  //   }
  // })

  // await prisma.fileRecord.create({
  //   data: {
  //     name: 'File1',
  //     folderRecordId: 2
  //   }
  // })

  // const folders = await prisma.folderRecord.findMany();
  // const files = await prisma.fileRecord.findMany();

  // console.log(folders);
  // console.log(files);

  // const path = await getPathToParentFolder(1)
  // const pathFolder = await getPath(1);

  // const fileId = 1;

  // const file = await prisma.fileRecord.findUnique({
  //   where: { id: fileId },
  // });

  // if (!file) return;

  // const parentFolder = await prisma.folderRecord.findUnique({
  //   where: { id: file.folderRecordId },
  // });

  // let folder = parentFolder;
  // const path = [];
  // while (folder !== null) {
  //   path.unshift(folder.name);
  //   if (folder.parentId === null) {
  //     folder = null;
  //   } else {
  //     folder = await prisma.folderRecord.findUnique({
  //       where: { id: folder.parentId },
  //     });
  //   }
  // }

  // const outputPath = path.join(" -> ") + " -> " + file.name;

  // console.log(outputPath);

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
      FolderRecord: await prisma.folderRecord.findUnique({
        where: {
          id: folderId,
        },
      }),
      ChildFolders: childFolders,
      ChildFiles: childFiles,
      ParentFolders: parentFolders,
    }
  
    console.log(output)
}

main(4)
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  // {
  //   FolderRecord: { id: 4, name: 'Folder3', parentId: 2 },
  //   ChildFolders: [],
  //   ChildFiles: [],
  //   ParentFolders: [
  //     { id: 2, name: 'Folder1', parentId: 1 },
  //     { id: 1, name: 'Folder', parentId: null }
  //   ]
  // }