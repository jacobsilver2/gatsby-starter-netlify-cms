import React, { useState } from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

function WorkRollTile({ post }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="is-parent column is-4" key={post.id}>
      <article className={`hero block_article`}>
        <Link to={post.fields.slug}>
          {post.frontmatter.featuredimage ? (
            <div
              className="featured-thumbnail"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.title}`
                }}
              />
              {isHovering && (
                <p className="post-meta is-overlay">{post.frontmatter.title}</p>
              )}
            </div>
          ) : null}
        </Link>
      </article>
    </div>
  );
}

export default WorkRollTile;
