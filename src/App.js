import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Stars from "./components/Stars/Stars";
import s from "./app.module.css";

function LoadingText() {
  const [loadingText, setLoadingText] = useState("АНАЛІЗУЮ");
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    if (loadingText === "АНАЛІЗУЮ") {
      const intervalId = setInterval(() => {
        setLoadingDots((prevDots) => {
          if (prevDots === "...") {
            return ".";
          } else if (prevDots === ".") {
            return "..";
          } else {
            return "...";
          }
        });
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [loadingText]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingText("МІНУСІВ НЕ ЗНАЙДЕНО!");
    }, 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <span>
      {loadingText}
      {loadingText === "АНАЛІЗУЮ" && loadingDots}
    </span>
  );
}

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Searcher</title>
        <link rel="canonical" href="http://shukayu.vercel.app" />
      </Helmet>

      <div className={s.title}>
        <LoadingText />
        <Stars />
      </div>
    </div>
  );
}

export default App;
