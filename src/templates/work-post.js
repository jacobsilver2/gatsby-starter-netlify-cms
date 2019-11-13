import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import Footer from "../components/Footer";

const StyledHtml = styled.div`
  h1,
  h2,
  h3 {
    padding-left: 25%;
    padding-right: 25%;
    /* width: 75%; */
    /* text-align: center; */
  }

  h2 {
    font-size: 1.3em;
  }

  h3 {
    font-size: 1em;
    font-weight: normal;
  }
  /* p:first-of-type {
    padding-left: 25%;
  } */
`;

export const WorkPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ""}
      <div className="content">
        <div className="columns is-fullwidth">
          <div className="column is-12">
            <StyledHtml>
              <PostContent content={content} />
            </StyledHtml>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default WorkPost;

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
