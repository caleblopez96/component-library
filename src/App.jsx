import { useState } from "react";
import "./App.css";
import Button1 from "./Components/Button/Button1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button1 />
    </>
  );
}

export default App;
