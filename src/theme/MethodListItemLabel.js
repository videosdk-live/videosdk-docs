import React from "react";
const MethodListItemLabel = ({
  name,
  option,
  type,
  defaultValue,
  description,
  children,
}) => (
  <li className="method-list-item">
    <h4 className="method-list-item-label">
      <span className="method-list-item-label-name">{name}</span>
      <span className={`method-list-item-label-badge`}>
        {option ? option : null}
      </span>
      <span className="method-list-item-validation">
        {type ? <code>{type}</code> : null}
      </span>
      <span className="method-list-item-validation">
        {defaultValue ? "(default:" + defaultValue + ")" : null}
      </span>
    </h4>
    {description && (
      <div class="method-list-item-description">
        {description ? description : <p>No description provided.</p>}
      </div>
    )}
    {children}
  </li>
);
export default MethodListItemLabel;
