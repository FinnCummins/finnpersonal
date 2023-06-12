import React, {useState} from "react";
import { NavBar } from "./navBar";

const index = () => {
    const [finnsAge, setFinnsAge] = useState(20);
    return (
        <>
            <NavBar />
            <h2>Home</h2>
            <p>
                My name is Finn Cummins and I am a {finnsAge} year old programmer from 
                <a href="https://en.wikipedia.org/wiki/Carlow" target="_blank">Carlow, Ireland</a>.
            </p>
            <img id="finn-in-verona" title="A picture of me on my 2023 trip to Verona, Italy" src="finnInVerona.JPG">
            A picture of me on my 2023 trip to <a href="https://en.wikipedia.org/wiki/Verona">Verona, Italy</a>
            </img>
        </>
    )
}