import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
    
  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.description.slice(0, 100)}...</p>
      <button onClick={handleReadMore}>Read More</button>
    </div>
  );
};

export default BlogCard;