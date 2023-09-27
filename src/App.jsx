import $ from "../src/assets/img/$.png";
import person from "../src/assets/img/person.icon.png";

import "./App.css";

function App() {
  return (
    <div>
      <div className="flex">
        <div className="left-content">
          <div>
            <h2>bill</h2>
            <div>
              <input placeholder="0" />
              <img src={$} alt="" />
            </div>
          </div>
          <div>
            <h2>select tip %</h2>
            <div>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button>custom</button>
            </div>
          </div>
          <div>
            <h2>number of people</h2>
            <div>
              <input placeholder="0" />
              <img src={person} alt="" />
            </div>
          </div>
        </div>
        <div className="right-content flex bg-green-800">
          <div>
            <div>
              <div>
                <h3>tip amount</h3>
                <span>/ person</span>
              </div>
              <div>
                <span>$0.00</span>
              </div>
            </div>
            <div>
              <div>
                <h3>tip amount</h3>
                <span>/ person</span>
              </div>
              <div>
                <span>$0.00</span>
              </div>
            </div>
          </div>
          <div>
            <button>reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
