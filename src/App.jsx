import { useState } from "react";
import sample from "./database/sample.json";
function App() {
  const [isPali, setIsPali] = useState(true);
  return (
    <div className="App w-full">
      <div className="bg-main h-[15vh] mb-4 text-2xl font-pali font-bold flex justify-center items-center">
        {text}
      </div>
      <div className="w-[95%] mx-auto overflow-hidden">
        <div className="flex gap-2 flex-nowrap overflow-x-scroll snap-x">
          <div
            className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start"
            onClick={setIsPali(true)}
          >
            បាលី
          </div>
          <div
            className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start"
            onClick={setIsPali(false)}
          >
            ប្រែខ្មែរ
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">{text}</p>
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <b className="truncate">រូបសិទ្ធិ</b>
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">រូបសិទ្ធិ</p>b
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
          <div className="px-4 py-1 bg-main rounded-lg shawdow-md snap-start">
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
        </div>
        <div className="py-4">
          {isPali ? (
            <span className="font-pali">{item.pw} </span>
          ) : (
            <span className="font-sans">{item.km} </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
