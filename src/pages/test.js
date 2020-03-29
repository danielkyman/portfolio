import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/hero";
import get from "lodash/get";

const Test = props => {
  console.log(props);
  const postTitle = props.data.allContentfulBlogPost.edges;
  console.log(postTitle);
  return (
    <div>
      <h1>This is a Test Page</h1>
    </div>
  );
};

export default Test;

export const pageQuery = graphql`
  query TestQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
