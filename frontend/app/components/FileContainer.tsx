import { FolderIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

type props = {
  folderInformation: any;
};

export default function FileContainer({ folderInformation }: props) {
  const childFolders = folderInformation.childFolders;
  const childFiles = folderInformation.childFiles;

  return (
    <div className="h-5/6 w-5/6 bg-white rounded-md p-12">
      {childFolders.length >= 1
        ? childFolders.map((childFolder: any, index: number) => (
            <div className="flex gap-1 cursor-pointer border-b-[1px] border-gray-500 py-1" key={index}>
              <FolderIcon className="h-6 w-6 text-blue-500" />
              <p className="text-black">{childFolder.name}</p>
            </div>
          ))
        : null}

      {childFiles.length >= 1
        ? childFiles.map((childFile: any, index: number) => (
            <div className="flex gap-1 cursor-pointer border-b-[1px] border-gray-500 py-1" key={index}>
              <DocumentTextIcon className="h-6 w-6 text-blue-500" />
              <p className="text-black">{childFile.name}</p>
            </div>
          ))
        : null}
    </div>
  );
}
