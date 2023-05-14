import { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import AddLocationModal from "./AddLocationModal";
import AddBookModal from "./AddBookModal";

type props = {
  folderInformation: any;
  clickFolder: (childFolder: any) => void;
  createLocation: (name: string, parentId: number) => void;
  createBook: (name: string, parentId: number) => void;
  updateBook: (id: number, parentId: number, newParentId: number) => void;
};

export default function Header({
  folderInformation,
  clickFolder,
  createLocation,
  createBook,
  updateBook,
}: props) {
  const parentFolders = folderInformation.parentFolders;
  const folderRecord = folderInformation.folderRecord;

  const [isOpenLocationModal, setOpenLocationModal] = useState(false);
  const [isOpenBookModal, setOpenBookModal] = useState(false);

  const toggleAddLocationModal = () =>
    setOpenLocationModal(!isOpenLocationModal);
  const toggleAddBookModal = () => setOpenBookModal(!isOpenBookModal);

  const clickSameFolder = () => {
    //TODO click same
  };

  const onDropFileHandler = (e: any, parentFolder: any) => {
    const fileId = e.dataTransfer.getData("fileId");
    const parentId = e.dataTransfer.getData("parentId");

    updateBook(Number(fileId), Number(parentId), Number(parentFolder.id));
  };

  const onDragOverFileHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row justify-center items-center align-middle m-5">
      <h3 className="text-4xl font-bold tracking-widest">Location</h3>

      <Breadcrumbs>
        {parentFolders.length >= 1
          ? parentFolders.reverse().map((parentFolder: any, index: any) => (
              <a
                onDrop={(e) => onDropFileHandler(e, parentFolder)}
                onDragOver={onDragOverFileHandler}
                onClick={() => clickFolder(parentFolder)}
                className="opacity-60"
                key={index}
              >
                {parentFolder.name}
              </a>
            ))
          : null}

        <a onClick={clickSameFolder} className="opacity-60">
          {folderRecord.name}
        </a>
      </Breadcrumbs>

      <button
        onClick={toggleAddLocationModal}
        className="bg-[#71aceb] py-1 px-10 rounded-md text-black font-medium text-md m-1"
      >
        Add Location
      </button>
      <button
        onClick={toggleAddBookModal}
        className="bg-[#71aceb] py-1 px-10 rounded-md text-black font-medium text-md m-1"
      >
        Add Book
      </button>

      <AddLocationModal
        isOpen={isOpenLocationModal}
        toggleModal={toggleAddLocationModal}
        folderRecord={folderRecord}
        createLocation={createLocation}
      />

      <AddBookModal
        isOpen={isOpenBookModal}
        toggleModal={toggleAddBookModal}
        folderRecord={folderRecord}
        createBook={createBook}
      />
    </div>
  );
}
