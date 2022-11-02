import React, { useState } from "react";
import Button from "./components/UI/Button/Button.js";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput.js";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
