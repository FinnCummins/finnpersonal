import React from 'react';
import { Link } from 'react-router-dom';
import './preview.scss';
import posts from "../techblog/posts.json"

const Preview = ({ slug }) => {
  
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    // render nothing if the post was not found
    return null;
  }

  const { title, date, description, image } = post;

  return (
    <Link to={`/techblog/${slug}`} className="blog-preview">
      
      <img className="blog-preview-image" src={image} alt={title} />
      <p id="blog-heading"><b>{title}</b></p>
      <p>{description}</p>
      
    </Link>
  );
}

export default Preview;
