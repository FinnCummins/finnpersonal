import React from "react";
import { NavBar } from "../navBar";
import  Preview  from "../Blog preview/preview";
import projectPosts from "./projectPosts.json"
import { Outlet } from 'react-router-dom';


export const Projects = () => {
    return (
        <>
            <NavBar />
            <h2 id="project-header">Projects</h2>
            <div id="blogs-container">
                {
                    projectPosts.map((post) => (
                        <Preview key={`${post.slug}`} slug={`${post.slug}`} isProjectBlog={true}/>
                    ))
                }
            </div>
            <Outlet />
        </>
    )
}