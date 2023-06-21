import React, {useState, useEffect} from "react";
import { NavBar } from "./navBar";
import Logo from "./Ireland/ireland"
import AnimatedLetters from "./Animated Letters/AnimatedLetters";

export const Home = () => {
    const [finnsAge, setFinnsAge] = useState((Date.now()-Date.parse("2002-09-02"))/1000/60/60/24/365.25);
    const [letterClass, setLetterClass] = useState("text-animate");
    const firstName = ["F", "i", "n", "n"];
    const surname = ["C", "u", "m", "m", "i", "n", "s"];
    
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
                    My name is Finn Cummins and I am a <div id="age">{finnsAge}</div> year old programmer 
                    from <a href="https://en.wikipedia.org/wiki/Carlow" target="_blank">Carlow, Ireland</a>.
                </h1>
            </div>
            
        </>
    )
}