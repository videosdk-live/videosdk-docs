import React from "react";
const ProductCard = ({ avtar, cardImage, cardTitle, cardDesc, links }) => {
  return (
    <div class="card-demo">
        <div class="card">
            <div class="card__header">
                {avtar && <div class="avatar">
                    <img
                        class="avatar__photo"
                        src={avtar.imagePath}
                    />
                    <div class="avatar__intro">
                    <div class="avatar__name">{avtar.name}</div>
                    <small class="avatar__subtitle">
                        {avtar.subtitle}
                    </small>
                    </div>
                </div>}
            </div>
            {cardImage && 
            <div class="card__image">
                <img
                    src={cardImage}
                    alt="Image alt text"
                    title="Logo Title Text 1"
                />
            </div>}
            {cardTitle || cardDesc && <div class="card__body">
                <h4>{cardTitle}</h4>
                <small>
                    {cardDesc}
                </small>
            </div>}
            <div class="card__footer">
                {links && 
                <div class="button-group button-group--block">
                    {links.map(link => (
                        <a  href={link.href} class="button button--secondary">{link.title}</a>
                    ))}
                </div>}
            </div>
        </div>
    </div>
  );
};

export default ProductCard;
