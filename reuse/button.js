import React from "react";

export const DefaultBtn = ({ title, width }) => (
    <button
        className="pri-btn"
        style={{ width: `${width}px`, cursor: "pointer" }}>
        {title}
    </button>
);
