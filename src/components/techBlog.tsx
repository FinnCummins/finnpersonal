import React from "react";
import { NavBar } from "./navBar";
import { Preview } from "./Blog preview/preview";

export const TechBlog = () => {
    return (
        <>
            <NavBar />
            <div id="blog-layout">
                <h2 id="techblog-header">Tech Blog</h2>
                <div id="blogs-container">
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                </div>
            </div>
        </>
    )
}