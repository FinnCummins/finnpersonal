import React from 'react';

export const NavBar = () => {
    return (
        <div className="navbar">
            <p><a href="/">Home</a> | </p>
            <p><a href="/about">About</a> | </p>
            <p><a href="/projects">Projects</a> | </p>
            <p><a href="/techblog">Tech blog</a></p>
        </div>
    );
}