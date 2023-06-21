import React, {useState, useEffect} from "react";
import { NavBar } from "./navBar";
import Logo from "./Ireland/ireland"
import AnimatedLetters from "./Animated Letters/AnimatedLetters";
import "../assets/index.scss";

export const Home = () => {
    const [finnsAge, setFinnsAge] = useState((Date.now()-Date.parse("2002-09-02"))/1000/60/60/24/365.25);
    const [letterClass, setLetterClass] = useState("text-animate");
    const lineOne = ["M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " "];
    const firstName = ["F", "i", "n", "n"];
    const surname = ["C", "u", "m", "m", "i", "n", "s"];
    const lineTwo = ["a", "n", "d", " ", "I", " ", "a", "m", " ", "a"];
    const lineThree = ["y", "e", "a", "r", " ", "o", "l", "d", " ", "p", "r", "o", "g", "r", "a", "m", "m", "e", "r", " "];
    const lineFour = ["f", "r", "o", "m"];
    const lineFive = ["C", "a", "r", "l", "o", "w", ",", " ", "I", "r", "e", "l", "a", "n", "d", "."];

    useEffect(() => {

        const intervalId = setInterval(() => {
            
            setFinnsAge(
                (
                    (Date.now()-Date.parse("2002-09-02"))/1000/60/60/24/365.25)
                    .toString()
                    .substring(0,12)
            );
                
        }, 250);

        return () => clearInterval(intervalId);

    }, [finnsAge]);

    return (
        <>
            <NavBar />
            
            <div id="homePage-intro">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={lineOne} idx={1} /> <AnimatedLetters letterClass={letterClass} strArray={firstName} idx={11} /> <AnimatedLetters letterClass={letterClass} strArray={surname} idx={15} /> <AnimatedLetters letterClass={letterClass} strArray={lineTwo} idx={22} /> <div id="age">{finnsAge}</div> <AnimatedLetters letterClass={letterClass} strArray={lineThree} idx={28} /> 
                    <AnimatedLetters letterClass={letterClass} strArray={lineFour} idx={46} /> <a href="https://en.wikipedia.org/wiki/Carlow" target="_blank"><AnimatedLetters letterClass={letterClass} strArray={lineFive} idx={50} /></a>
                </h1>
            </div>
        
        </>
    )
}