import React from "react";
const Card = ({ heading, description, link, icon }) => (
  <a
    className="card"
    href={link}
    style={{ marginBottom: 10, cursor: "pointer" }}
  >
    <div
      class="card__header"
      style={{ display: "flex", gap: 20, alignItems: "center" }}
    >
      {icon && (
        <img
          src={icon}
          alt="React"
          width="20"
          style={{ display: "block", maxHeight: "20px" }}
        />
      )}
      {heading && <h3>{heading}</h3>}
    </div>

    {description && (
      <div className="card__body">
        <p>{description}</p>
      </div>
    )}
  </a>
);
export default Card;
