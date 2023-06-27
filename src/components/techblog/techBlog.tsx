import React from "react";
import { NavBar } from "../navBar";
import  Preview  from "../Blog preview/preview";
import { slugs } from "../../loadPosts.js"
import { Outlet } from 'react-router-dom';

export const TechBlog = () => {
    console.log('Slugs:', slugs); 
    return (
        <>
            <NavBar />
            <div id="blog-layout">
                <h2 id="techblog-header">Tech Blog</h2>
                <div id="blogs-container">
                    {
                        slugs.map((slug) => (
                            <Preview key={"dogpatch"} slug={"dogpatch"} />
                        ))
                    }
                </div>
            </div>
            <Outlet />
        </>
    )
}