import { useState } from "react";
import Header from "./components/Header";
import { getFiles } from "./services/fileService";
import { getFolderInformation } from "./services/folderService";
import FileContainer from "./components/FileContainer";
export default async function Home() {
  // const [count, setCount] = useState(0);

  const folderInformation = await getFolderInformation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-gray-400 h-screen w-screen rounded-md">
        <Header folderInformation={folderInformation} />
        <FileContainer folderInformation={folderInformation}/>
      </div>
    </main>
  );
}
