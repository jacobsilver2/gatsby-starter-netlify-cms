import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
// import WorkRollTile from "./WorkRollTile";
import GridItem from "./GridItem";
import styled from "styled-components";

// const StyledContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 530px));
//   grid-gap: 1rem;
// `;
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

function WorksRoll({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <StyledContainer>
      {posts &&
        posts.map(({ node: post }) => <GridItem key={post.id} post={post} />)}
    </StyledContainer>
  );
}

WorksRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <WorksRoll data={data} />}
  />
);
