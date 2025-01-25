import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    summary: "Discover how AI is shaping the future of technology and human life.",
    content: `
      Artificial Intelligence (AI) has come a long way since its inception. 
      From simple rule-based systems to complex neural networks, AI is revolutionizing industries like healthcare, finance, and education.
      
      In healthcare, AI-powered algorithms are being used to diagnose diseases, predict patient outcomes, and develop personalized treatments. 
      Companies like OpenAI, DeepMind, and others are driving innovation in this space.

      AI's impact is not without challenges, including ethical concerns and job displacement. As we move forward, 
      it is essential to balance innovation with responsibility to ensure AI benefits humanity as a whole.
    `,
    references: [
      "https://openai.com",
      "https://deepmind.com",
    ],
  },
  {
    id: 2,
    title: "The Impact of Climate Change",
    summary: "Understand the challenges and solutions to mitigate climate change.",
    content: `
      Climate change is one of the most pressing global issues of our time. Rising temperatures, melting glaciers, and extreme weather events 
      are clear indicators of a changing climate caused by human activities.

      Governments and organizations worldwide are taking steps to reduce greenhouse gas emissions through renewable energy, 
      sustainable practices, and international agreements like the Paris Climate Accord. 

      Individuals can also make a difference by reducing waste, conserving energy, and advocating for climate policies.
      Together, we can tackle climate change and secure a sustainable future for generations to come.
    `,
    references: [
      "https://www.ipcc.ch",
      "https://www.un.org/en/climatechange",
    ],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <h1>Blog not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <h3>References:</h3>
      <ul>
        {blog.references.map((ref, index) => (
          <li key={index}>
            <a href={ref} target="_blank" rel="noopener noreferrer">
              {ref}
            </a>
          </li>
        ))}
      </ul>
      <div className="dash-container">
        <Link to="/">
            <button className="dashboard-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
