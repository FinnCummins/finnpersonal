import React from 'react';
import ReactMarkdown from 'react-markdown';
import posts from './projectPosts.json';

const ProjectPost = ({ slug }) => {
  const post = posts.find(post => post.slug === slug);
  const postContent = post.content;
  
  return <ReactMarkdown>{postContent}</ReactMarkdown>;
}

export default ProjectPost;
