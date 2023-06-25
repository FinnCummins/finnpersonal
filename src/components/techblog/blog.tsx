import React from 'react';
import ReactMarkdown from 'react-markdown';
import { posts } from '../../loadPosts';
import matter from 'gray-matter';

const BlogPost = ({ slug }) => {
  const postContent = posts[slug];
  const { content } = matter(postContent);
  
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default BlogPost;