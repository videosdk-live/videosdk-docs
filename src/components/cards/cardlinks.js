import React from "react";
import Card from "../../theme/Card";

const CardLinks = ({ title, text, links, img }) => {
  return (
    <div
      className="card"
      style={{
        marginBottom: 16,
      }}
    >
      <div class="card__header">
        {/* <h3>{title}</h3> */}
        {/* <Card heading={title} icon="/img/icons/libraries/react-icon.svg" /> */}
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          {
            <img
              src={img}
              alt="Image"
              width="20"
              style={{ display: "block", maxHeight: "20px" }}
            />
          }
          {title && <h3 style={{ marginBottom: 0 }}>{title}</h3>}
        </div>
        <p className="card-text">{text}</p>
      </div>

      <div className="card__body row">
        
        {links.map((link, i) => (
            <a href={link.link}>
            <div class="card-button" key={link.link + i} >
              {link.linkName}
            </div>
            </a>
          ))}
      </div>
    </div>
  );
};
export default CardLinks;
