import styled from "styled-components";

export const Container = styled.div`
    background-image: url('/images/background-board.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    margin: auto;
    width: 67rem;
    transition: all .2s ease-in-out;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 6;
    -webkit-animation-name: slideup;
    animation-name: slideup;
    height: 62rem;
`

export const Wrapper = styled.div`
   position: absolute;
   display: flex;
   top: 44%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 55rem;
   padding: 30px;
`

export const Left = styled.div`
   width: 170px;
   height: 100%;
   margin-right: 150px;
   margin-left: -10px;
`

export const LeftWrapper = styled.div`
   width: 100%;
   height: 100%;
`

export const ListMiniCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    //Display elements from right to left:
    direction: rtl;
    scrollbar-width: thin;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: all .2s ease-in-out;
    left: 0;
    z-index: 1;
`

export const CardImg = styled.img`
    cursor: pointer;
    width: 55px;
    height: 6.5rem;
    padding: 10px 0;
`

export const CardWrapper = styled.div`
    margin-left: 45px;
    margin-top: 50px;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 550px;
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
    border-radius: 5px;
`

export const Countdown = styled.div`
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
    justify-content: center;
    margin-top: 32px;
`

export const Btn = styled.div`
    background-image: url('https://play.farmersworld.io/static/media/plain-button.58a5875c.png');
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
    //Disable button
    /* filter: grayscale(1); */
`

//=========== Resource =================
export const ListResourceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #de8d2b;
    padding: 10px 15px;
    border-radius: 5px;
`

export const ResourceTitle = styled.div`
    font-size: 23px;
    color: #923935;
`

export const ListResource = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ResourceItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
`

export const ResourceImg = styled.img`

`

export const ResourceQuantity = styled.div`

`

export const ListLand = styled.div`
    width: 100%;
    height: 280px;
`

export const ListLandWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 9px;
    display: flex;
    flex-wrap: wrap;
`

export const ListLandTitle = styled.div`
    font-size: 23px;
    color: #923935;
`

