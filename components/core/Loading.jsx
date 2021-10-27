import React from "react";

function Loading() {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin"
    />
  );
}

export default Loading;
