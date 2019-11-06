import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import WorkRollTile from "./WorkRollTile";

function WorksRoll(props) {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="columns is-multiline">
      {posts && posts.map(({ node: post }) => <WorkRollTile post={post} />)}
    </div>
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
