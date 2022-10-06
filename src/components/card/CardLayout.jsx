import React from "react";

function CardLayout({ children }) {
  return (
    <div className="card custom-card">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardLayout;
