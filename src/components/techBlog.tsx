import React from "react";
import { NavBar } from "./navBar";

export const TechBlog = () => {
    return (
        <>
            <NavBar />
            <h2>Tech Blog</h2>
            <p>Here I will write about the technical decisions/challenges/features I have encountered
                while building my <a href="projects.html">projects</a>.
            </p>
        </>
    )
}