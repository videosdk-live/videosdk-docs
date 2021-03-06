import React from "react";
import Card from "../../theme/Card";

const CardLinks = ({ title, text, links, img }) => {
  return (
    <div className="card">
      <div class="card__header">
        {/* <h3>{title}</h3> */}
        {/* <Card heading={title} icon="/img/icons/libraries/react-icon.svg" /> */}
        {img && (
          <div className="card-icon">
            {
              <img
                src={img}
                alt="Image"
                style={{
                  display: "block",
                }}
              />
            }
          </div>
        )}
        <div className="card-title">
          {title && <p style={{ marginBottom: 0 }}>{title}</p>}
        </div>
        <p className="card-text" style={{ marginTop: "8px" }}>
          {text}
        </p>
      </div>

      <div
        className="card__body row"
        style={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}
      >
        {links.map((link, i) => (
          <a href={link.link}>
            <div class="card-button" key={link.link + i}>
              {link.linkName}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default CardLinks;
