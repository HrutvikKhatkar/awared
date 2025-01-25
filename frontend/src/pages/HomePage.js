import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [trendingIssues, setTrendingIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    // Fetch dummy blogs data
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    // Fetch dummy trending issues data
    const fetchTrendingIssues = async () => {
      try {
        const response = await fetch(
          // "https://jsonplaceholder.typicode.com/photos?_limit=5"
          // "http://localhost:5000/blogs/?_limit=5"
          "https://awared.onrender.com/blogs/?_limit=5"
        );
        const data = await response.json();
        setTrendingIssues(data);
      } catch (error) {
        console.error("Error fetching trending issues:", error);
      }
    };

    fetchBlogs();
    fetchTrendingIssues();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.toLowerCase().includes(query))
    );
    setCurrentPage(1); // Reset to first page on search
  };

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredBlogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="home">
      <div className="dash-container">
        <h1>Be Aware</h1>
        <Link to="/dashboard">
           <button className="dashboard-button">Dashboard</button>
        </Link>
      </div>
      <p>
        Addressing the environmental and health risks of paper cups through
        innovation.
      </p>

      {/* Carousel for Trending Issues */}
      <div className="carousel">
        {trendingIssues.map((issue) => (
          <div className="carousel-item" key={issue.id}>
            <img src={'https://th.bing.com/th?id=OIP.EXNqs1uTNVyaql_lRvaeTgHaE4&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'} alt={issue.title} className="carousel-image" />
            <div className="carousel-info">
              <h3>{issue.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />
      

      {/* Blog List */}
      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body.substring(0, 100)}...</p>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3WJzGAdErhc"
              width="100%"
              height="200px"
              controls
              className="video-player"
            />
             {/* Link to Blog Detail Page */}
             <Link to={`/blogDetail/${1}`}>
              <button className="more-details">More details...</button>
            </Link>
          </div>
          
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-number">
          Page {currentPage} of {Math.ceil(filteredBlogs.length / blogsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
