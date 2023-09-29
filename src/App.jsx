import $ from "../src/assets/img/$.png";
import person from "../src/assets/img/person.icon.png";
import { useState } from "react";
import spaceMemo from "../src/assets/font/SpaceMono-Bold.ttf";

import "./App.css";

let data = ["5", "10", "15", "25", "50"];

function App() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();
  const [tip, setTip] = useState(0);

  const tipAmount = (bill * tip) / 100 / people;
  const total = bill / people + tipAmount;
  console.log(tip);
  return (
    <div className="flex  max-w-4xl w-full mt-36 ">
      <div className="flex items-center justify-between max-w-4xl w-full bg-white py-6 px-6 rounded-lg">
        <div className="left-content max-w-sm w-full ">
          <div className="w-full flex flex-col items-start">
            <h2 className="capitalize mb-3 font-bold text-lg text-h2-color">
              bill
            </h2>
            <div className="flex justify-between max-w-sm  w-full relative ">
              <input
                type="number"
                min={0}
                placeholder="0"
                className="bg-input-bg w-full px-5 py-2 flex text-end text-2xl text-input-txt font-bold rounded-lg
                cursor-pointer border-none hover:border-solid hover:border-2 hover:border-btn-active-color"
                value={bill}
                onChange={(event) => setBill(parseInt(event.target.value))}
              />
              <img src={$} alt="money img" className="absolute top-3 left-3" />
            </div>
          </div>
          <div className="flex flex-col items-start my-6">
            <h2 className="capitalize mb-3 font-bold text-lg text-h2-color">
              select tip %
            </h2>
            <div className="grid grid-cols-3 gap-x-3 gap-y-4">
              {data.map((item, index) => {
                return (
                  <button
                    className="bg-percent-btn px-10 py-2 rounded-lg text-white font-bold text-2xl hover:bg-btn-active"
                    key={index}
                    onClick={() => setTip(item)}
                  >
                    {item}%
                  </button>
                );
              })}
              <input
                type="number"
                min={0}
                placeholder="Custom"
                value={tip}
                onChange={(event) => setTip(parseInt(event.target.value))}
                className="text-2xl font-bold flex text-end  border-1 border-solid border-2 rounded-lg
                  cursor-pointer hover:border-solid hover:border-2 hover:border-btn-active-color"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <h2 className="capitalize mb-3 font-bold text-lg text-h2-color">
              number of people
            </h2>
            <div className="flex justify-between max-w-sm  w-full relative ">
              <input
                type="number"
                min={0}
                placeholder="0"
                className="bg-input-bg w-full px-5 py-2 flex text-end text-2xl text-input-txt 
                            font-bold rounded-lg cursor-pointer hover:border-solid 
                            hover:border-2 hover:border-btn-active-color "
                value={people}
                onChange={(event) => setPeople(parseInt(event.target.value))}
              />
              <img
                src={person}
                alt="person-icon"
                className="absolute top-3 left-3"
              />
            </div>
          </div>
        </div>
        <div className="right-content flex flex-col gap-y-28 max-w-sm w-full bg-output-bg rounded-md px-6">
          <div className="w-full mt-8 flex flex-col gap-y-10 capitalize">
            <div className="flex justify-between w-full ">
              <div>
                <h3 className="text-white text-lg font-">tip amount</h3>
                <span className="text-span-color text-sm">/ person</span>
              </div>
              <div>
                <span
                  className="text-4xl font-bold text-money-color"
                  placeholder="0000"
                >
                  $
                  {bill == null || people == null
                    ? "0.00"
                    : tipAmount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <h3 className="text-white text-lg">total</h3>
                <span className="text-span-color text-sm">/ person</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-money-color">
                  ${bill == null || people == null ? "0.00" : total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <button
              className="bg-reset-bg px-28 py-2 text-lg font-bold text-reset-btn-color 
                    rounded-md cursor-pointer uppercase hover:bg-btn-active"
              onClick={() => window.location.reload()}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
