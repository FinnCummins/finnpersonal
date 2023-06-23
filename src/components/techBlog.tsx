import React from "react";
import { NavBar } from "./navBar";
import { Preview } from "./Blog preview/preview";

export const TechBlog = () => {
    return (
        <>
            <NavBar />
            <h2 id="techblog-header">Tech Blog</h2>
            <Preview />
        </>
    )
}