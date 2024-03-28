import React from "react";
import { BlogPostProvider } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme/BlogPostItem";
export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  const itemFoundIndex = items.findIndex(
    (item) =>
      item.content.frontMatter.title === "Twilio to Video SDK Migration Guide"
  );

  // If itemFoundIndex is found, move that item to the beginning
  if (itemFoundIndex !== -1) {
    const foundItem = items.splice(itemFoundIndex, 1)[0];
    items.unshift(foundItem);
  }

  return (
    <>
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
