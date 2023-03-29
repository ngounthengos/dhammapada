import { useState, useEffect, useRef } from "react";
import sample from "./database/sample.json";
const words = sample[0];
function Aqq() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  const [isPali, setIsPali] = useState(true);
  const [isKhmer, setIsKhmer] = useState(false);
  const [isMix, setIsMix] = useState(false);
  const [sortType, setSortType] = useState("po");

  const sortArray = (type) => {
    const types = {
      ko: "ko",
      po: "po",
    };
    const sortProperty = types[type];
    const sorted = [...words].sort((a, b) => a[sortProperty] - b[sortProperty]);
    setData(sorted);
  };

  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);
  const buttonClickHandler = (e) => {
    if (e.currentTarget.classList.contains("opacity-0")) {
      e.currentTarget.classList.remove("opacity-0");
      e.currentTarget.classList.add("opacity-100");
    } else {
      e.currentTarget.classList.remove("opacity-100");
      e.currentTarget.classList.add("opacity-0");
    }
  };
  return (
    <div className="App w-full">
      <div className="bg-amber-100 rounded-lg flex items-center justify-center h-[15vh] mb-4 text-2xl font-pali font-bold">
        ធម្មបទ
      </div>
      <div className="px-2">
        <div className="flex gap-2 overflow-x-auto select-none snap-x flex-nowrap">
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => {
              setSortType("po");
              setIsPali(true);
              setIsKhmer(false);
              setIsMix(false);
            }}
          >
            <pl>បាលី</pl>
          </div>
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => {
              setSortType("ko");
              setIsPali(false);
              setIsKhmer(true);
              setIsMix(false);
            }}
          >
            <p className="truncate">ប្រែ</p>
          </div>
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => {
              setSortType("ko");
              setIsPali(false);
              setIsKhmer(false);
              setIsMix(true);
            }}
          >
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => setSortType("ko")}
          >
            <p className="truncate">ប្រែសេចក្តី</p>
          </div>
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => setSortType("ko")}
          >
            <p className="truncate">រូបវិគ្គហ</p>
          </div>
          <div
            className="bg-amber-200 rounded-md shadow-md flex justify-center items-center px-4 py-1 snap-start"
            onClick={() => setSortType("ko")}
          >
            <p className="truncate">រូបសិទ្ធិ</p>
          </div>
        </div>

        <div className="py-4 font-pali">
          {data.map((word, index) => (
            <span className="pr-2 leading-loose" key={index}>
              {isPali && <span>{word.pw}</span>}
              {isKhmer && (
                <span>
                  <span className="font-sans">{word.km}</span>
                </span>
              )}
              {isMix && (
                <span>
                  {word.pw} <span className="font-sans">{word.km}</span>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aqq;
