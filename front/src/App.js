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
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   postData("/add?number1=1&number2=4").then((data) => {
  //     setMessage(data.result);
  //   });
  // }, []);
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
      {message !== "" && (
        <div className="result-container">
          <label> {message.result} </label>
        </div>
      )}
    </div>
  );
}

export default App;
