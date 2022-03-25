import "./App.css";
import React, { useState, useEffect } from "react";

async function postData(url = "") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    postData("/add?number1=1&number2=4").then((data) => {
      setMessage(data.result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          MESSAGE BACKEND: <code>{message}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
