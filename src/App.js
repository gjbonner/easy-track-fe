import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = "http://localhost:8000/events";
    fetch(url)
      .then((r) => r.json())
      .then((json) => setEvents(json))
      .catch((e) => console.log(e));
  };

  const renderEvents = () => {
    return events.map((e) => {
      const { severity, eventTime } = e;
      return (
        <div>
          <p>{eventTime}</p>
          <p>{severity}</p>
        </div>
      );
    });
  };

  return <div className="App">{renderEvents()}</div>;
}

export default App;
