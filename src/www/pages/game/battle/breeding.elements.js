import styled from "styled-components"; 

export const Container = styled.div`
    background-image: url('/images/background-board.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 35%;
    position: relative;
    margin: auto;
    width: 63rem;
    transition: all .2s ease-in-out;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 6;
    -webkit-animation-name: slideup;
    animation-name: slideup;
    height: 60rem;
`

export const Wrapper = styled.div`
   position: absolute;
   display: flex;
   align-items: center; 
   top: 45%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 30px;
`

export const Left = styled.div`
   width: 280px;
   height: 100%;
   margin-left: 50px;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px;
    background-color: rgba(233,225,214,.6);
    border-radius: 5px;
    padding: 10px 10px;
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const InfoTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Type = styled.div`
    font-size: 23px;
    color: #923935;
`

export const Level = styled.div`
    background-color: #923935;
    color: #fff;
    font-size: 20px;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
`

export const InfoBody = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
`

export const InfoBodyLeft = styled.div`
    font-size: 20px;
`

export const InfoBodyLeftItem = styled.div`
font-size: 32px;
text-align: center;
`

export const InfoBodyRight = styled.div`
    margin-right: 30px;
    font-size: 20px;
`

export const InfoBodyRightItem = styled.div`

`

export const CountdownWrapper = styled.div`
    border: 2px solid #de8d2b;
    width: 50%;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CountdownInside = styled.div`
    display: flex;
    align-items: center;
    color: #923935;
    padding: 15px 10px;
    font-size: 20px;
`

export const Hour = styled.div`

`

export const Minutes = styled.div`

`

export const Second = styled.div`

`

export const BtnList = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

export const Btn = styled.div`
    background-image: url('https://play.farmersworld.io/static/media/plain-button.58a5875c.png');
    background-size: contain;
    background-clip: padding-box;
    width: 200px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: 50%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #fff;
    cursor: ${({ disabled }) => !disabled ? 'pointer' : 'not-allowed'};
    text-shadow: -3px 2px 2px #923935;
    display: flex;
    align-items: center;
    justify-content: center;
    //Disable button
    filter: ${({ disabled }) => disabled ? 'grayscale(1)' : ''};
`