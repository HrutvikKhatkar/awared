import React from "react";
import { useLocation } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {blog.videoUrl && (
        <div className="video-container">
          <iframe
            src={blog.videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;