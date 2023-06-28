import React from 'react';
import ReactMarkdown from 'react-markdown';
import  posts  from './posts.json';

const BlogPost = ({ slug }) => {
  const post = posts.find(post => post.slug === slug);
  const postContent = post.content;
  
  return <ReactMarkdown>{postContent}</ReactMarkdown>;
}

export default BlogPost;
