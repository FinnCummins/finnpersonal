import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./homePage";
import { About } from "./aboutPage";
import { Projects } from "./projectsBlog/projectPage";
import { TechBlog } from "./techblog/techBlog";
import "../assets/index.scss"
import  posts  from "./techblog/posts.json";
import  projectPosts  from "./projectsBlog/projectPosts.json";
import BlogPost from './techblog/blog';
import ProjectPost from "./projectsBlog/projectBlog"

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techblog" element={<TechBlog />} />
            {posts.map(post => (
                <Route key={post.slug} path={`/techblog/${post.slug}`} element={<BlogPost slug={post.slug} />} />
            ))}
            {projectPosts.map(post => (
                <Route key={post.slug} path={`/projects/${post.slug}`} element={<ProjectPost slug={post.slug} />} />
            ))}
        </Routes>
    )
}