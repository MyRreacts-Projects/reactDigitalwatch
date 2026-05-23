// watch.jsx

import React, { useEffect, useState } from "react";
import "./watch.css";

const Watch = () => {

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [date, setDate] = useState(
    new Date().toDateString()
  );

  useEffect(() => {

    let interval = setInterval(() => {

      setTime(new Date().toLocaleTimeString());

      setDate(new Date().toDateString());

    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (

    <div className="watchContainer">

      <div className="watchCard">

        <div className="glow1"></div>
        <div className="glow2"></div>

        <h2 className="watchTitle">
          Digital Clock
        </h2>

        <h1 className="watchTime">
          {time}
        </h1>

        <p className="watchDate">
          {date}
        </p>

      </div>

    </div>

  );
};

export default Watch;