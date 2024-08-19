import React from "react";

function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>
            <em>Author: {blog.author.email}</em> {/* Display author's email */}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;