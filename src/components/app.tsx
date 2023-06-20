import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./homePage";
import { About } from "./aboutPage";
import { Projects } from "./projectPage";
import { TechBlog } from "./techBlog";

export const App = () => {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techblog" element={<TechBlog />} />
        </Routes>
    )
}