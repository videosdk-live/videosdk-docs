import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
const Card = ({ title, text, link, image }) => {
  return (
    <div className={clsx("card-demo")}>
      <Link to={link}>
        <div className={clsx("card shadow--lw margin--sm")}>
          {image ? (
            <div class="card__image">
              <img src={image} alt={text} title={title} />
            </div>
          ) : null}
          <div class="card__body">
            <h4>{title}</h4>
            <small>{text}</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
