import { useState } from "react";
import "./App.css";
import ButtonCounter from "./Components/Button Counter/ButtonCounter.jsx";
import Toggle from "./Components/Toggle/Toggle.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonCounter text="text" />
      <Toggle />
    </>
  );
}

export default App;
