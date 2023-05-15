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
    <>
      <div
        className="flex flex-col justify-center items-center align-middle m-5 w-full"
      >
        <div
          className="flex flex-col pt-2 items-center sm:flex-row sm:pt-0 w-5/6"
        >
          <h3 className="text-4xl font-bold tracking-widest">Location</h3>
          <div className="overflow-hidden w-full h-[50px] lg:h-auto">
            <div className="overflow-y-auto h-[50px] bg-gray-200 rounded-sm
            lg:h-auto">
              <Breadcrumbs className="" separator=">" fullWidth={true}>
                {parentFolders.length >= 1
                  ? parentFolders
                      .reverse()
                      .map((parentFolder: any, index: any) => (
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
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-2 sm:flex-row">
          <button
            onClick={toggleAddLocationModal}
            className="bg-[#71aceb] py-1 rounded-md text-black font-medium text-md m-1
          hover:bg-gray-300 w-40"
          >
            Add Location
          </button>
          <button
            onClick={toggleAddBookModal}
            className="bg-[#71aceb] py-1 rounded-md text-black font-medium text-md m-1
          hover:bg-gray-300 w-40"
          >
            Add Book
          </button>
        </div>
      </div>

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
    </>
  );
}
