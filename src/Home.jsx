import { useState, useEffect, useRef } from "react";
import sentences from "./database/sample.json";
function Home() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  const [isPali, setIsPali] = useState(true);
  const [isKhmer, setIsKhmer] = useState(false);
  const [isMix, setIsMix] = useState(false);
  const [sortType, setSortType] = useState("po");
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
            បាលី
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
          {sentences.map((sentence) => {
            return (
              <div className="flex flex-wrap gap-x-2 gap-y-0 leading-loose w-full">
                {[...sentence]
                  .sort((a, b) => a[sortType] - b[sortType])
                  .map((word, id) => {
                    console.log(word.pw);
                    return (
                      <>
                        {isPali && <span key={id}>{word.pw}</span>}
                        {isKhmer && (
                          <span className="font-sans">{word.km}</span>
                        )}
                        {isMix && (
                          <>
                            <span key={id}>
                              {word.pb.map((pali, index) => {
                                return <>{pali} </>;
                              })}
                            </span>
                            <span className="font-sans">{word.km}</span>
                          </>
                        )}
                      </>
                    );
                  })}
                ។
              </div>
            );
          })}
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

export default Home;
