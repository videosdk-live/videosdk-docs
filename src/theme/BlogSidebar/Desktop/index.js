import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
export default function BlogSidebarDesktop({sidebar}) {

  const items = sidebar.items;
  // Find the index of the item with title "hello"
  const itemFoundIndex = items.findIndex(item => item.title === "Twilio to Video SDK Migration Guide");

  // If itemFoundIndex is found, move that item to the beginning
  if (itemFoundIndex !== -1) {
    const foundItem = items.splice(itemFoundIndex, 1)[0];
    items.unshift(foundItem);
  }
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (<li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
))}
        </ul>
      </nav>
    </aside>
  );
}
