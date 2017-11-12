import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    console.log(this.props)
    return (
      <div className="post-tag-container">
        <p>More posts like this:</p>
        {tags &&
          tags.map(tag =>
            <Link
              key={tag.name}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag.name)}`}
            >
              <button>
                {tag.name}
              </button>
            </Link>
          )}
      </div>
    );
  }
}

export default PostTags;
