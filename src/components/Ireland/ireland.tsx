import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    
    
    return (
        <div className="logo-container" ref={bgRef}>
            <img 
                className="solid-logo" 
                src={"3dIrelandOutline.jpg"}
                ref={solidLogoRef}
                alt="JavaScript,  Developer"
            />
            <svg 
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g 
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path 
                        ref={outlineLogoRef}
                        d="M34 291c-1-2 1-4 4-4l1-2h-5c-2-1-2-1 1-4l7-4c2 0 3-1 3-3 0-1-1-2-2-1-1 2-9 7-14 8-9 3-12 3-13 1v-2l2-3 1-1h1l3-1h2c0-3 5-6 10-8l5-4-5 2c-13 6-17 6-17 2l-1-2-1 2h-1l-1 1c-1 1-3 1-5-3s-2-8 1-8l1-3c0-2 6-6 12-8l4-2c0-1-3-2-10 0-10 2-12 2-13-3 0-3 1-4 2-4l7-4c5-3 8-4 8-2h3l4 1 2 2c3 0 3-1 3-4l-2-6c-2-3-2-4 1-5l5-1c2 0 4-4 3-6-1-1-5-1-5 1l-3 1c-2 0-3-1-3-2 0-2 11-11 16-13 2-1 4-3 6-8l3-5-3-1c-2 0-3-1-3-2l1-2c2 0 6-6 6-8l2-3 3-1c2 2 5 2 5 0l5-1c4 0 4 0 3-3v-3h-7l-8 1-6 1h-2c0 1-2 2-5 2l-5 1 1-4 2-6c5-5 2-5-3 0-5 4-8 4-8-1l2-4 1-2-3 2c-3 2-3 2-5 1l-3-1c-1 0-2-1-2-3-1-1 0-2 1-4l2-2-3-2c-4-2-3-3 2-3 2 0 3-1 3-2s2-2 6-2c2 0 2-1 1-2-1-2-2-2-3-2s-1-4 1-6l3-1c6 0 7-1 7-2l2-3c3-2 3-2 1-2l-3 1-7 1-5-2-2-2c-1-2-3-3-6-3-5 0-6-2-3-5 2-1 3-2 8-1 5 0 5 0 3-2-1-1-1-2 1-5 2-2 2-5 0-5l-2 3c-3 4-5 3-5-2 0-7 2-9 7-8 3 1 4 0 5-1 1-2 2-2 6-2l13 1c9 0 10 1 10 5 0 3 1 3 4 0 2-2 3-3 8-3l9 1h5c2-1 2-2 0-3-4-3-4-5-2-7l4-1 5-1c3-1 4-2 4-4s3-5 4-5l1-2c0-1 0-2-5-1H84l-3-1c-3-1-3-1-2-4 3-4 8-6 13-6h3l-1-3c-2-3-1-5 1-4 3 0 3 0 1-3v-3l2-4c0-5 7-11 11-12l5-2h5c3 1 3 1 6-2 2-2 3-4 4-3 3 1 5 7 5 11l1 5c2 0 2-5 1-8-2-6-1-10 3-10 2 0 2-1 2-4 0-4 2-4 6-1l7 6 3 4-5 7-5 6 4 1c3 0 3-1 4-4 2-6 3-6 9-6 5 0 6-1 8-3 3-4 7-4 13-2l6 1c5-1 6 0 6 5s1 5 4 8c3 2 4 3 5 8l4 6 3 4-1 2-5 5c-1 3 0 5 1 3l5-3 3-3 3 3c4 3 6 9 6 16 0 6-1 7-4 6l-2-6c0-3 0-4-2-5l-2-1v5c0 5 1 6 4 7 7 3 2 10-7 11-4 0-4 0-5 4 0 3-1 5-3 7-4 4-7 4-9 2l-3-1 1 2c3 3 3 4-1 4l-3 1c-1 1 0 7 2 7 2 1 2 1 2 6-1 5-1 5 4 11l5 6-2 3c-2 3-2 4 0 7l1 2-3 2c-2 1-2 2 2 12l5 13c1 1 1 2-1 4l-2 4-1 3-1 7-2 6c-1 0-2 4-2 9 0 4-1 6-2 7l-2 2c0 2-4 6-5 5-3-1-2 1 1 4 5 5 4 7-1 8l-11 1c-5 0-7 0-8 2-3 3-5 3-4-1 0-3-1-3-3 0-1 2-2 2-7 3-4 0-7 1-7 2l-4 2c-4 0-6 1-7 5l-5 5-3 1-9 6c-10 7-13 8-13 5l-1-2-2-1c-1 0-2 0-1 3 0 4 0 5-2 6l-4 3c-3 2-6 3-9 2-1 0-2 0-2 2l-4 4c-3 2-4 2-6 1-3-2-5-2-8 1-2 3-10 6-15 6-2 0-3-1-3-2 0-2 0-2-2-2l-11 5c-1 0-2-1-2-3zm10-2c7-3 8-3 8 0s8 1 14-4c4-3 6-3 9-1 3 1 7-1 9-4 1-3 2-3 4-3 3 1 4 0 6-2l4-2c2 0 3-3 2-6-2-5 3-6 7-1 2 2 2 2 11-5l10-6c3 0 6-4 6-6-1-2 0-3 3-4 2-2 5-2 6-2l4-1 7-2c4 0 5-1 6-3l2-3c1-1 3 2 3 4v3l3-3c2-3 2-3 6-2h9l5-2-2-3c-3-4-2-7 1-8 3-2 7-9 7-14l1-7 4-11 3-10c1-1 0-5-3-13l-5-14c0-1 1-2 3-2 2-1 2-2 1-4-2-2-2-2 0-5l2-4-4-5c-4-5-5-5-5-11l-1-5-3-3c-2-6 0-10 4-9 3 1 2 1 0-2l-3-4c1-3 3-3 6 0l5 3c1 0 6-6 6-8 1-6 2-7 7-7 6 0 10-6 4-8-3-1-3-1-3-8s0-8 2-7c4 1 5 3 5 6 0 5 2 7 3 6 3-2 0-12-4-18l-2-3-5 3c-5 4-6 4-7 3-1-2 2-8 4-10 3-2 3-4 0-4l-4-7-4-8c-5-2-6-4-6-8s0-4-3-4l-8-1-6-2-5 3c-3 3-5 4-9 4-5 0-6 0-7 3-2 6-2 6-7 6-7 0-7-2 0-8l5-7-11-9-1 2c0 2 0 3-3 3-4 1-4 2-2 9 1 5 1 9-3 9-2 0-3-3-3-8l-2-6-2-2-3 3c-3 4-3 4-6 2-2-1-3 0-5 1l-4 2c-4 0-11 7-11 11l-1 3c-1 1-1 2 1 5l1 3h-3c-3 0-3 0-1 2s1 5-2 4c-5-1-13 3-13 6 0 1 8 4 13 4l9-2 5-1c2 1 1 6-1 7l-4 5c0 3-1 3-6 5-7 1-8 3-5 6 2 2 2 2 1 5-2 3-3 3-7 1l-8-1c-6 0-7 0-8 2-3 4-5 3-6-1-1-3-2-3-7-3l-10-1c-6-1-10 0-10 2s-3 2-6 1c-4-2-5-1-5 4v4l3-3c1-2 2-3 4-2s2 5 0 8c-2 2-1 2 0 4 3 4 2 4-4 3-4-1-9 0-9 1l3 2 8 4c5 3 7 3 13 1 5-2 7 0 3 4l-3 4c1 2 0 2-5 3-7 0-7 1-4 6 2 2 2 3 1 4l-5 1c-2 0-3 0-2 1 2 2 1 3-3 2h-4l2 2 2 1c1 1 1 2-1 4l-2 2 3 2c3 2 3 2 6 0 3-3 5-3 5-1l-2 4c-2 3-2 4 0 4 1 1 3-1 5-3 4-4 5-4 6-2 2 3 2 3-1 6l-2 3c0 3 4 3 8 1l7-1 10-1c5-1 5-1 6 2 2 6 2 7-2 8l-6 2h-5l-2-1-4 6-4 6 2 1c3 0 3 1 0 7s-4 7-8 10l-13 10 8-2 8-4 5 2 7 2 6-6 6-6 5 3 4 3-15 6a130 130 0 0 1-23 5c-3 4-4 5-8 6s-5 2-2 4l1 4 1 4c2 1 0 2-3 3s-4 0-5-1l-4-1h-3c-1-1-3-1-6 1l-6 4c-2 1-3 2-2 4s4 2 11 0h9l5-1h2c2 2 1 3-8 6-10 4-13 7-12 9 0 1 0 2-2 3-3 1-3 1-1 5 1 3 2 3 6-1 4-2 4-2 4 2l2 3 11-5 10-3c1 1-2 6-6 7-6 3-8 4-9 7-1 2-2 3-4 3l-4 3c-2 2-3 2 6 0 5-1 9-3 13-6 6-4 6-4 8-2s1 4-5 7l-6 4h1c7-3 8-1 3 4-3 3-5 5-3 5l7-3zm9-79c1-1 0-2-5-2h-4l-2 2-2 1 13-1zm21-5c4-2 6-3 2-3l-3-2h-1l-1 1-6 6h2l7-2z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo;