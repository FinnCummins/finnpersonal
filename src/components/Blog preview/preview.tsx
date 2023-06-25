import React from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import './preview.scss';
import {posts} from "../../loadPosts.js"

interface PreviewProps {
  slug: string;
}

const Preview: React.FC<PreviewProps> = ({ slug }) => {
  
  const postContent = posts[slug];
  
  const { data, content } = matter(postContent);

  // Extract the blog title, description, and image from the frontmatter
  const { title, description, image } = data;

  return (
    <Link to={`/techblog/${slug}`}>
      <div className="blog-preview">
        <img className="blog-preview-image" src={image} alt={title} />
        <p id="blog-heading"><b>{title}</b></p>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Preview;
