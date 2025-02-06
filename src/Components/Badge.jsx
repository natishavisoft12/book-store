// Badge.js
import React from "react";

const Badge = ({ text, bgColor = "bg-blue-500", textColor = "text-white" }) => {
  return (
    <span
      className={`${bgColor} ${textColor} text-sm font-semibold rounded-full px-4 py-1`}
    >
      {text}
    </span>
  );
};

export default Badge;
