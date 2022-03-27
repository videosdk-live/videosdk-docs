import React from "react";

const LinksGrid = ({ links }) => (
  <div class="row">
    {links.map(({ href, label }, i) => (
      <div key={i} class="col col--4 margin-bottom--lg">
        <ul>
          <li>
            <a href={href}>{label}</a>
          </li>
        </ul>
      </div>
    ))}
  </div>
);

export default LinksGrid;
