import React from 'react';
import Link from '@docusaurus/Link';
import {NavbarSecondaryMenuFiller} from '@docusaurus/theme-common';
function BlogSidebarMobileSecondaryMenu({sidebar}) {
  const items = sidebar.items;
  // Find the index of the item with title "hello"
  const itemFoundIndex = items.findIndex(item => item.title === "Twilio to Video SDK Migration Guide");

  // If itemFoundIndex is found, move that item to the beginning
  if (itemFoundIndex !== -1) {
    const foundItem = items.splice(itemFoundIndex, 1)[0];
    items.unshift(foundItem);
  }
  return (
    <ul className="menu__list">
      {sidebar.items.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
