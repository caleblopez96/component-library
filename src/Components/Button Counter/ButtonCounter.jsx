import { useState } from "react";
import Button1 from "../Button1/Button1";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        -
      </button>
      <span className="text-xl font-semibold">{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        +
      </button>
    </div>
  );
}
