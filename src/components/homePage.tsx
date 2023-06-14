import React, {useState, useEffect} from "react";
import { NavBar } from "./navBar";

export const Home = () => {
    const [finnsAge, setFinnsAge] = useState((Date.now()-Date.parse("2002-09-02"))/1000/60/60/24/365.25);

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
            <h2>Home</h2>
            <p>
                My name is Finn Cummins and I am a {finnsAge} year old programmer from <a href="https://en.wikipedia.org/wiki/Carlow" target="_blank">Carlow, Ireland</a>.
            </p>
            <img id="finn-in-verona" title="A picture of me on my 2023 trip to Verona, Italy" src="finnInVerona.JPG"/>
            A picture of me on my 2023 trip to <a href="https://en.wikipedia.org/wiki/Verona">Verona, Italy</a>
        </>
    )
}