import React from "react";
import PropTypes from "prop-types";
import {Link, graphql, StaticQuery} from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <div className="columns is-multiline">
                {posts &&
                posts.map(({node: post}) => (
                    <div className="is-parent column is-6" key={post.id}>
                        <Link to={post.fields.slug}>
                            <article
                                className={`blog-list-item tile is-child box notification-custom ${
                                    post.frontmatter.featuredpost ? "is-featured" : ""
                                }`}
                            >
                                <header>
                                    {post.frontmatter.featuredimage ? (
                                        <div className="featured-thumbnail">
                                            <PreviewCompatibleImage
                                                imageInfo={{
                                                    image: post.frontmatter.featuredimage,
                                                    alt: `featured image thumbnail for post ${post.title}`
                                                }}
                                            />
                                        </div>
                                    ) : null}
                                    <p className="post-meta">

                                        <span className="title has-text-black is-size-4">{post.frontmatter.title}</span>
                                        <span></span>
                                        <span
                                            className="subtitle is-6 is-block">{post.frontmatter.date} &bull; {post.timeToRead} min read
                                        </span>
                                    </p>
                                </header>
                                <p>
                                    {post.excerpt}
                                    <br/>
                                    <br/>
                                    {/* <Link className="button" to={post.fields.slug}>Keep Reading →</Link> */}
                                </p>
                            </article>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

BlogRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date(formatString: "MMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              timeToRead
            }
          }
        }
      }
    `}
        render={(data, count) => <BlogRoll data={data} count={count}/>}
    />
);
