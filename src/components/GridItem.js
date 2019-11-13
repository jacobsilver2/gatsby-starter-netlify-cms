import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { spring, Motion } from "react-motion";
import styled from "styled-components";

// const StyledContainer = styled.div`
//   width: 100%;
// `;
const StyledContainer = styled.div`
  /* display: flex; */
  min-width: 20rem;
  width: calc((100% - 1rem * 3 * 2) / 3);
  height: 100%;
  /* padding: 1rem; */
  margin: 0.75rem;
  align-items: center;
  /* justify-content: center; */
`;

const StyledSubcontainer = styled.div`
  position: relative;
  /* background-color: #2f3238; */
  overflow: hidden;
`;
const StyledContainerImage = styled.div`
  position: relative;
  background-color: #17819c;
`;
const StyledTitle = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  top: 5%;
  left: 5%;
`;
const StyledTitleText = styled.div`
  font-size: 2rem;
  position: relative;
  font-family: fertigo-pro, serif;
  font-style: normal;
  font-weight: 400;
`;
const StyledOverlay = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledProtectedText = styled.p`
  font-size: 1rem;
`;

const StyledImage = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
`;

const GridItem = ({ post }) => {
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
        let styleImage = {
          transform: "scale(" + motionStyle.scale + ")",
          opacity: motionStyle.imageOpacity
        };
        let styleSubtitle = { opacity: motionStyle.opacity };
        return (
          <StyledContainer
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Link to={post.fields.slug}>
              <StyledSubcontainer>
                <StyledContainerImage>
                  {post.frontmatter.featuredimage && (
                    <Img
                      fluid={
                        post.frontmatter.featuredimage.childImageSharp.fluid
                      }
                      alt={post.frontmatter.title}
                      style={styleImage}
                    />
                  )}
                </StyledContainerImage>
                <StyledOverlay>
                  <StyledTitle style={styleSubtitle}>
                    <StyledTitleText>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.title
                        }}
                      />
                      {post.frontmatter.description === "protected" && (
                        <StyledProtectedText>
                          password protected
                        </StyledProtectedText>
                      )}
                    </StyledTitleText>
                  </StyledTitle>
                </StyledOverlay>
              </StyledSubcontainer>
            </Link>
          </StyledContainer>
        );
      }}
    </Motion>
  );
};

export default GridItem;
