import styled from "styled-components";


export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1626178488686-3a957cd2b7ae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 70px);//Xét cứng 1 hàm 
  display: flex;
  /* display: flex; */
    justify-content: center;
    align-items: center;
`;

export const BoxClaimBorder = styled.div`
    position: relative;
    height: 400px;
    width:350px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blanchedalmond;
    opacity: 0.8;
    
`;

export const BoxClaim = styled.div`
  
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
    opacity: 0.8;
    transition: all 0.5s ease;
    &:hover {
        /* opacity: 1; */
        transform: scale(1.05);
    }
    
`;
export const ImgBtn = styled.img`
    /* width: 100%; */
    width: 50%;
    cursor: pointer;
`

export const TextBtn = styled.div`
    /* width: 100%; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
