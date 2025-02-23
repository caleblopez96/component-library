import React, { useState } from "react";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 rounded cursor-pointer ${
        isToggled ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {isToggled ? "On" : "Off"}
    </button>
  );
}
