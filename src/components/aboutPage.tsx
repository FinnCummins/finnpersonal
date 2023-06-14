import React from "react";
import { NavBar } from "./navBar";

export const About = () => {
    return (
        <div id="about">
            <NavBar />
            <h2>About</h2>
            <p>I have been programming for the last four years now and I am currently studying Computer science
                and business at <a href="https://tcd.ie" target="_blank">Trinity College Dublin</a>.
                I am studying react and next.js at the moment and I'm looking to implement OpenAi APIs in 
                my next project.
            </p>
        </div>
    )
}