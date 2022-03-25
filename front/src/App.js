import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello?a=1")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.data);
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
