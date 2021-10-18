import React from "react";
import Card from "../../theme/Card";

const CardLinks = ({ title, text, links, img }) => {
  return (
    <div
      className="card"
      style={{ border: "1px solid #ccc", marginBottom: 16 }}
    >
      <div class="card__header">
        {/* <h3>{title}</h3> */}
        {/* <Card heading={title} icon="/img/icons/libraries/react-icon.svg" /> */}
        <div
          class="card__header"
          style={{ display: "flex", gap: 20, alignItems: "center" }}
        >
          {
            <img
              src={img}
              alt="Image"
              width="20"
              style={{ display: "block", maxHeight: "20px" }}
            />
          }
          {title && <h3>{title}</h3>}
        </div>
      </div>

      <div className="card__body">
        <p>{text}</p>
        {links.map((link, i) => (
          <ul>
            <li key={link.link + i}>
              <a href={link.link}>{link.linkName}</a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default CardLinks;
