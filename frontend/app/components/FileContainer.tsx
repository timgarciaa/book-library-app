"use client";
import { useState } from "react";
import {
  FolderIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import DeleteBookModal from "../components/DeleteBookModal";

type props = {
  folderInformation: any;
  clickFolder: (childFolder: any) => void;
  updateBook: (id: number, parentId: number, newParentId: number) => void;
  deleteBook: (id: number, parentId: number) => void;
};

export default function FileContainer({
  folderInformation,
  clickFolder,
  updateBook,
  deleteBook,
}: props) {
  const folderRecord = folderInformation.folderRecord;
  const childFolders = folderInformation.childFolders;
  const childFiles = folderInformation.childFiles;

  const [isOpenDeleteBookModal, setIsOpenDeleteBookModal] = useState(false);
  const [deleteBookId, setDeleteBookId] = useState(0);
  const [deleteBookParentId, setDeleteBookParentId] = useState(0);

  const toggleDeleteBookModal = () =>
    setIsOpenDeleteBookModal(!isOpenDeleteBookModal);

  const onFileDrag = (e: any, childFile: any) => {
    e.dataTransfer.setData("fileId", childFile.id);
    e.dataTransfer.setData("parentId", childFile.folderRecordId);
  };

  const onDropFileHandler = (e: any, parentFolder: any) => {
    const fileId = e.dataTransfer.getData("fileId");
    const parentId = e.dataTransfer.getData("parentId");

    updateBook(Number(fileId), Number(parentId), Number(parentFolder.id));
  };

  const onDragOverFileHandler = (e: any) => {
    e.preventDefault();
  };

  const clickTrashIcon = (childFile: any) => {
    setDeleteBookId(childFile.id);
    setDeleteBookParentId(childFile.folderRecordId)
    toggleDeleteBookModal();
  }

  return (
    <div className="h-5/6 w-5/6 bg-white rounded-md p-12">
      {folderRecord.parentId != null ? (
        <>
          <div
            onDrop={(e) => onDropFileHandler(e, { id: folderRecord.parentId })}
            onDragOver={onDragOverFileHandler}
            onClick={() => clickFolder({ id: folderRecord.parentId })}
            className="flex gap-1 cursor-pointer border-b-[1px] border-gray-500 py-1
            hover:border-[#F7AB0A]/40 hover:bg-gray-300 rounded-sm"
          >
            <FolderIcon className="h-6 w-6 text-blue-500" />
            <p className="text-black">{"..."}</p>
          </div>
        </>
      ) : null}
      {childFolders.length >= 1
        ? childFolders.map((childFolder: any, index: number) => (
            <div
              onDrop={(e) => onDropFileHandler(e, childFolder)}
              onDragOver={onDragOverFileHandler}
              onClick={() => clickFolder(childFolder)}
              className="flex gap-1 cursor-pointer border-b-[1px] border-gray-500 py-1
            hover:border-[#F7AB0A]/40 hover:bg-gray-300 rounded-sm justify-between"
              key={index}
            >
              <div className="flex flex-row">
                <FolderIcon className="h-6 w-6 text-blue-500" />
                <p className="text-black">{childFolder.name}</p>
              </div>
            </div>
          ))
        : null}

      {childFiles.length >= 1
        ? childFiles.map((childFile: any, index: number) => (
            <div
              className="flex gap-1 border-b-[1px] border-gray-500 py-1
              hover:border-[#F7AB0A]/40 hover:bg-gray-300 rounded-sm justify-between"
              key={index}
            >
              <div className="flex flex-row">
                <DocumentTextIcon className="h-6 w-6 text-blue-500" />
                <p className="text-black">{childFile.name}</p>
              </div>

              <div className="flex flex-row gap-3">
                <div
                  className="cursor-pointer"
                  draggable
                  onDragStart={(e) => onFileDrag(e, childFile)}
                >
                  {" "}
                  <ArrowsPointingOutIcon className="h-6 w-6 text-blue-500" />
                </div>
                <TrashIcon
                  className="cursor-pointer h-6 w-6 text-blue-500 mr-3"
                  onClick={() => clickTrashIcon(childFile)}
                />
              </div>
            </div>
          ))
        : null}

      <DeleteBookModal
        isOpen={isOpenDeleteBookModal}
        toggleModal={toggleDeleteBookModal}
        bookId={deleteBookId}
        parentId={deleteBookParentId}
        deleteBook={deleteBook}
      />
    </div>
  );
}
