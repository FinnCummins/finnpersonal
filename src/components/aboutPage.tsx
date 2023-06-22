import React from "react";
import { NavBar } from "./navBar";

export const About = () => {
    return (
        <div id="about">
            <NavBar />
            <h2 id="about-header">About</h2>
            <div id="about-layout">
                <p id="bio">
                    I have been programming for the last four years now and I am currently studying Computer science
                    and business at <a href="https://tcd.ie" target="_blank">Trinity College Dublin</a>.
                    I am studying react and next.js at the moment and I'm looking to implement OpenAi APIs in 
                    my next project.
                </p>
                <div id="verona-image">
                    <img id="finn-in-verona" title="A picture of me on my 2023 trip to Verona, Italy"
                    src="finnInVerona.JPG"/>
                    <p>
                        A picture of me on my 2023 trip 
                        to <a href="https://en.wikipedia.org/wiki/Verona">Verona, Italy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}