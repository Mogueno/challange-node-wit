import "./App.css";
import React, { useState, useEffect } from "react";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [saveLogsToCSVTime, setSaveLogsToCSVTime] = useState(1);
  const [shouldSaveLogsToCSV, setShouldSaveLogsToCSV] = useState(false);
  const [shouldSaveQueries, setShouldSaveQueries] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    postData("/add?server-configs").then((data) => {
      setShouldSaveQueries(data.shouldLogQueries);
      setShouldSaveLogsToCSV(data.shouldSaveLogs);
      setSaveLogsToCSVTime(data.saveLogsTime);
    });
  }, []);
  const handleSaveConfigs = () => {
    //TODO: show response on saved server configs
    postData("/server-configs", {
      saveLogsTime: saveLogsToCSVTime,
      shouldSaveLogs: shouldSaveLogsToCSV,
      shouldLogQueries: shouldSaveQueries,
    }).then((data) => {
      console.log("saved configs: ", data);
    });
  };
  const handleSumClick = () => {
    postData(`/add?number1=${number1}&number2=${number2}`).then((data) => {
      setMessage(data);
    });
  };
  const handleDivClick = () => {
    if (number2 === 0 || number1 === 0) {
      setMessage({ result: "Cannot divide by zero" });
    } else {
      postData(`/divide?number1=${number1}&number2=${number2}`).then((data) => {
        setMessage(data);
      });
    }
  };
  const handleMulClick = () => {
    postData(`/multiply?number1=${number1}&number2=${number2}`).then((data) => {
      setMessage(data);
    });
  };
  const handleSubClick = () => {
    postData(`/subtract?number1=${number1}&number2=${number2}`).then((data) => {
      setMessage(data);
    });
  };

  useEffect(() => {
    console.log("message: ", message);
  }, [message]);

  return (
    <div className="App">
      <header className="header">Node.JS Calculator</header>
      <div className="inputs-container">
        <div className="input-container">
          <label>Number 1</label>
          <input
            type="number"
            onChange={(e) => setNumber1(e.target.value)}
            maxlength="4"
            value={number1}
          ></input>
        </div>
        <div className="input-container">
          <label>Number 2</label>
          <input
            type="number"
            onChange={(e) => setNumber2(e.target.value)}
            maxlength="4"
            value={number2}
          ></input>
        </div>
      </div>
      <div className="operations-container">
        <div className="operation-container">
          <button onClick={handleSumClick}>+</button>
        </div>
        <div className="operation-container">
          <button onClick={handleSubClick}>-</button>
        </div>
        <div className="operation-container">
          <button onClick={handleDivClick}>/</button>
        </div>
        <div className="operation-container">
          <button onClick={handleMulClick}>*</button>
        </div>
      </div>

      <div className="result-container">
        {message !== "" && <label> {message.result} </label>}
      </div>

      <div className="toggle-containers">
        <div className="toggle-container">
          <div className="toggle">
            {" "}
            <input
              type="checkbox"
              class="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
              onChange={() => setShouldSaveLogsToCSV()}
            />
            <label class="toggle-switch-label" for="toggleSwitch">
              Save mongoDB queries
            </label>
          </div>
          <div className="toggle">
            <input
              type="checkbox"
              class="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
              onChange={() => setShouldSaveQueries(!shouldSaveQueries)}
            />
            <label class="toggle-switch-label" for="toggleSwitch">
              Save logs to CSV
            </label>
          </div>
          {shouldSaveLogsToCSV && (
            <div className="toggle">
              <label class="toggle-switch-label" for="toggleSwitch">
                Save logs to CSV time:
              </label>
              <input
                type="number"
                class="toggle-switch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
                value={saveLogsToCSVTime}
                onChange={(e) => setSaveLogsToCSVTime(e.target.value)}
              />
            </div>
          )}
          <div className="toggle">
            <button
              class="save-configs-button"
              name="save-configs-button"
              id="save-configs-button"
              onClick={handleSaveConfigs}
            >
              Save configs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
