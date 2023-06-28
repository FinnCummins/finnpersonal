import React from "react";
import { NavBar } from "../navBar";
import  Preview  from "../Blog preview/preview";
import posts from "./posts.json"
import { Outlet } from 'react-router-dom';

export const TechBlog = () => {
    return (
        <>
            <NavBar />
            <div id="blog-layout">
                <h2 id="techblog-header">Tech Blog</h2>
                <div id="blogs-container">
                    {
                        posts.map((post) => (
                            <Preview key={`${post.slug}`} slug={`${post.slug}`} />
                        ))
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}