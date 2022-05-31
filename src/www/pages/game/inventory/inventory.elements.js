import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp4054234.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 70px);
  display: flex;
`;

export const SidebarBorder = styled.div`
    position: relative;
    border: 1px solid white;
    width: 300px;
    margin-right: 60px;
    margin-top: 60px;
    border-radius: 10px;
`

export const SideBar = styled.div`
    background-color: black;
    opacity: 0.3;
    height: 100%;
    border-radius: 10px;
`

export const ListBtn = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    left: 9%;
    top: 5%;
`

export const Btn = styled.div`
    width: 250px;
    position: relative;
    margin-bottom: 25px;
    opacity: ${(props) => props.active === true ? '1' : '0.7'};
    transform: ${(props) => props.active === true ? 'scale(1.05)' : 'scale(1)'};
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        opacity: 1;
        transform: scale(1.05);
    }
`

export const ImgBtn = styled.img`
    width: 100%;
`

export const TextBtn = styled.p`
    position: absolute;
    top: 29%;
    left: 39%;
    font-size: 25px;
`

// export const SideBar = styled.div`
//     background-image: url('https://play.xpsgame.io/static/media/containers.21972a72.png');
//     background-position: -3199.5px -793.5px;
//     width: 402px;
//     height: 852px;
//     display: flex;
//     justify-content: space-around;
//     flex-direction: column;
//     text-shadow: 2px 1px 1px #111;
//     box-sizing: border-box;
// `;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 18px;
`;

export const BodyTop = styled.div`
    display: flex;
    align-items: center;
`;

export const BodyTopTitle = styled.div`
    font-size: 30px;
    margin-right: 10px;
    color: white;
`;

export const BodyTopList = styled.div`
    display: flex;
    align-items: center;
`;

export const BodyTopItem = styled.div`
    width: 122px;
    height: 57px;
    margin-top: 18px;
    position: relative;
`

export const BodyTopName = styled.div`
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const BodyTopImg = styled.img`
    width: 100%;
`

export const BodyBorder = styled.div`
    border: 1px solid white;
    flex: 1;
    border-radius: 10px;
`

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CardItem = styled.div`
    width: 300px;
    height: 350px;
    margin-right: 20px;
`
export const SkeletonList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

