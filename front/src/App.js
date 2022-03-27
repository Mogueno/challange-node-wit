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

async function getData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
  const [serverMessage, setServerMessage] = useState("");
  const [fadeProp, setFadeProp] = useState("fade-in");

  useEffect(() => {
    getData("/server-config").then((data) => {
      setShouldSaveQueries(data?.data?.shouldLogQueries);
      setShouldSaveLogsToCSV(data?.data?.shouldSaveLogs);
      setSaveLogsToCSVTime(data?.data?.saveLogsTime);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fadeProp === "fade-in") {
        setFadeProp("fade-out");
      }
    }, 2000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  const handleSaveConfigs = () => {
    const data = {
      saveLogsTime: saveLogsToCSVTime,
      shouldLogQueries: shouldSaveQueries,
      shouldSaveLogs: shouldSaveLogsToCSV,
    };
    postData("/server-config", data)
      .catch((err) => {
        err && setServerMessage(err);
      })
      .then((data) => {
        data && setServerMessage(data);
      });
    setFadeProp("fade-in");
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
      postData(`/divide?number1=${number1}&number2=${number2}`, {}).then(
        (data) => {
          setMessage(data);
        }
      );
    }
  };
  const handleMulClick = () => {
    postData(`/multiply?number1=${number1}&number2=${number2}`, {}).then(
      (data) => {
        setMessage(data);
      }
    );
  };
  const handleSubClick = () => {
    postData(`/subtract?number1=${number1}&number2=${number2}`).then((data) => {
      setMessage(data);
    });
  };

  return (
    <div className="App">
      <header className="header">Node.JS Calculator</header>
      <div className="inputs-container">
        <div className="input-container">
          <label>Number 1</label>
          <input
            type="number"
            onChange={(e) => setNumber1(e.target.value)}
            maxLength="4"
            value={number1}
          ></input>
        </div>
        <div className="input-container">
          <label>Number 2</label>
          <input
            type="number"
            onChange={(e) => setNumber2(e.target.value)}
            maxLength="4"
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
              className="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
              checked={shouldSaveQueries}
              onChange={() => setShouldSaveQueries(!shouldSaveQueries)}
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
              Save mongoDB queries
            </label>
          </div>
          <div className="toggle">
            <input
              type="checkbox"
              checked={shouldSaveLogsToCSV}
              className="toggle-switch-checkbox"
              name="toggleSwitch"
              id="toggleSwitch"
              onChange={() => setShouldSaveLogsToCSV(!shouldSaveLogsToCSV)}
            />
            <label className="toggle-switch-label" htmlFor="toggleSwitch">
              Save logs to CSV
            </label>
          </div>
          {shouldSaveLogsToCSV && (
            <div className="toggle">
              <label className="toggle-switch-label" htmlFor="toggleSwitch">
                Save logs to CSV time:
              </label>
              <input
                type="number"
                className="toggle-switch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
                min={0}
                value={saveLogsToCSVTime}
                onChange={(e) => setSaveLogsToCSVTime(parseInt(e.target.value))}
              />
            </div>
          )}
          <div className="toggle">
            <button
              className="save-configs-button"
              name="save-configs-button"
              id="save-configs-button"
              onClick={handleSaveConfigs}
            >
              Save configs
            </button>
          </div>
        </div>

        <div className="server-response">
          <div className="server-response-block">
            {serverMessage !== "" && (
              <label className={fadeProp}> {serverMessage.data} </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
