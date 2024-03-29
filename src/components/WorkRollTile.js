import React, { useState } from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Img from "gatsby";
import styled from "styled-components";
import { spring, Motion } from "react-motion";

const StyledGridItem = styled.div`
  .grid-item {
    /* width: 100%; */
  }
  .subcontainer {
    position: relative;
    background-color: #2f3238;
    overflow: hidden;
  }
  .containerImage {
    position: relative;
    background-color: #17819c;
  }
  .title {
    text-align: center;
    font-size: 18px;
    color: black;
    /* position: relative; */
    top: 5%;
    left: 5%;
  }
  .titleText {
    font-size: 30px;
    position: relative;
    font-family: fertigo-pro, serif;
    font-style: normal;
    font-weight: 400;
  }
  .overlay {
    /* position: absolute; */
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .img {
    width: 100%;
    cursor: pointer;
    position: relative;
    vertical-align: middle;
  }
`;

function WorkRollTile({ post }) {
  const [isHovering, setIsHovering] = useState(false);
  const getSpringProps = () => {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0
      },
      style: {
        scale: spring(isHovering ? 1 : 1),
        marginTop: spring(isHovering ? 22 : 25),
        imageOpacity: spring(isHovering ? 0.4 : 0.7),
        opacity: spring(isHovering ? 1 : 0)
      }
    };
  };

  return (
    <Motion {...getSpringProps()}>
      {motionStyle => {
        let styleSubtitle = { opacity: motionStyle.opacity };
        return (
          <StyledGridItem
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            key={post.id}
          >
            <div className="subcontainer">
              <Link to={post.fields.slug}>
                {post.frontmatter.featuredimage ? (
                  <div className="containerImage">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                    <div className="overlay">
                      <div className="title" style={styleSubtitle}>
                        <div className="titleText">
                          <p>{post.frontmatter.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </Link>
            </div>
          </StyledGridItem>
        );
      }}
    </Motion>
  );
}

export default WorkRollTile;
