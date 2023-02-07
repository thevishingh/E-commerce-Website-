import {css} from "styled-components";

export const mobile = (props)=>{
    return css`
    @media only screen and (max-width:380px){
        ${props}
    }
    `
}


/* For extremely small screen devices (595px and below) */
// @media only screen and (max-width: 595px) {...}

/* Small screen devices (600px and above) */
// @media only screen and (min-width: 600px) {...}

/* Medium screen devices (768px and above) */
// @media only screen and (min-width: 768px) {...}

/* Big screen devices (889px and above) */
// @media only screen and (min-width: 889px) {...}

/* Extra big screen devices (1200px and above) */
// @media only screen and (min-width: 1200px) {...}

