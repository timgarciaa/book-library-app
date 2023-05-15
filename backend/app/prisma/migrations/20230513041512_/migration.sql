-- CreateTable
CREATE TABLE "FolderRecord" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "FolderRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileRecord" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "folderRecordId" INTEGER NOT NULL,

    CONSTRAINT "FileRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FolderRecord_name_parentId_key" ON "FolderRecord"("name", "parentId");

-- AddForeignKey
ALTER TABLE "FileRecord" ADD CONSTRAINT "FileRecord_folderRecordId_fkey" FOREIGN KEY ("folderRecordId") REFERENCES "FolderRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

--Add initial value
INSERT INTO "FolderRecord" (id, name, parentId)
VALUES (1, 'Home', NULL);