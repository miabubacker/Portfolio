import React, { useEffect, useRef, useState } from 'react'

export default function Aboutme(props) {
    const divRef = useRef(null);
    const{lineCount,setLineCount}=props
    useEffect(() => {
      if (divRef.current) {
        const div = divRef.current;
        const lineHeight = parseFloat(getComputedStyle(div).lineHeight);
        const divHeight = div.clientHeight;
        const lines = divHeight / lineHeight;
        setLineCount(Math.ceil(lines));
      }
    }, [lineCount]);

    console.log(lineCount)
  return (
    <div  ref={divRef}>
           /**
              <br />
              * About me
              <br />
              * I have 5 years of еxperience in web
              <br />
              * development lorem ipsum dolor sit amet, <br />
              * consectetur adipiscing elit, sed do eiusmod
              <br />
              * tempor incididunt ut labore et dolore
              <br />
              * magna aliqua. Ut enim ad minim veniam,
              <br />
              * quis nostrud exercitation ullamco laboris
              <br />
              * nisi ut aliquip ex ea commodo consequat.
              <br />
              * Duis aute irure dolor in reprehenderit in
              <br />
              *<br />
              * Duis aute irure dolor in reprehenderit in
              <br />
              * voluptate velit esse cillum dolore eu fugiat <br />
              * nulla pariatur. Excepteur sint occaecat <br />
              * officia deserunt mollit anim id est laborum.
              <br />
              */
    </div>
  )
}
