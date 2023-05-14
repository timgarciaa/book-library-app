"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { createFile, updateFile, deleteFile } from "./services/fileService";
import { getFolderInformation, createFolder } from "./services/folderService";
import FileContainer from "./components/FileContainer";

export default function Home() {
  const [folderInformation, setFolderInformation] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchFolderInformation = async (folderId = 1) => {
    setIsLoading(true);

    const newFolderInformation = await getFolderInformation(folderId);
    setFolderInformation(newFolderInformation);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFolderInformation();
  }, []);

  const clickFolder = (childFolder: any) => {
    console.log("childFolder: ", childFolder);
    fetchFolderInformation(childFolder.id);
  };

  const createLocation = async (name: string, parentId: number) => {
    const folderRecord: any = await createFolder(name, parentId);
    fetchFolderInformation(parentId);
  };

  const createBook = async (name: string, parentId: number) => {
    const fileRecord: any = await createFile(name, parentId);
    fetchFolderInformation(parentId);
  };

  const updateBook = async (
    id: number,
    parentId: number,
    newParentId: number
  ) => {
    const fileRecord: any = await updateFile({
      id,
      folderRecordId: newParentId,
    });
    fetchFolderInformation(parentId);
  };

  const deleteBook = async (id: number, parentId: number) => {
    await deleteFile({ id });
    fetchFolderInformation(parentId);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-gray-400 h-screen w-screen rounded-md">
        {!isLoading ? (
          <>
            <Header
              folderInformation={folderInformation}
              clickFolder={clickFolder}
              createLocation={createLocation}
              createBook={createBook}
              updateBook={updateBook}
            />
            <FileContainer
              folderInformation={folderInformation}
              clickFolder={clickFolder}
              updateBook={updateBook}
              deleteBook={deleteBook}
            />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
}
