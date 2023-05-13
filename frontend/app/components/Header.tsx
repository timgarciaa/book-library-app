"use client";
import { Breadcrumbs } from "@material-tailwind/react";

type props = {
  folderInformation: any;
};

export default function Header({ folderInformation }: props) {
  const parentFolders = folderInformation.parentFolders;
  const folderRecord = folderInformation.folderRecord;

  return (
    <div className="flex flex-row justify-center items-center align-middle m-5">
      <h3 className="text-4xl font-bold tracking-widest">Location</h3>

      <Breadcrumbs>
        {parentFolders.length >= 1
          ? parentFolders.reverse().map((parentFolder: any, index: any) => (
              <>
                <a href="#" className="opacity-60" key={index}>
                  {parentFolder.name}
                </a>
              </>
            ))
          : null}

        <a href="#" className="opacity-60">
          {folderRecord.name}
        </a>

        {/* {folders.map((folder:any, i: any) => (
        <a href="#" className="opacity-60" key={i}>
          {folder.name}
        </a>
      ))} */}
        {/* <a href="#" className="opacity-60">
        Docs
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a> */}
      </Breadcrumbs>

      <button className="bg-[#71aceb] py-1 px-10 rounded-md text-black font-medium text-md m-1">
        Add Location
      </button>
      <button className="bg-[#71aceb] py-1 px-10 rounded-md text-black font-medium text-md m-1">
        Add Book
      </button>
    </div>
  );
}
