import styled from "styled-components";


export const Btn = styled.button`
    background-image: url('https://play.farmersworld.io/static/media/plain-button.58a5875c.png');
    font-family: "CookieRun-Black";
    background-size: contain;
    background-clip: padding-box;
    width: 180px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: 50%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    text-shadow: -3px 2px 2px #923935;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: ${({ disabledd }) => disabledd ? 'grayscale(1)' : ''};
    cursor: ${({ disabledd }) => !disabledd ? 'pointer' : 'not-allowed'}
`
