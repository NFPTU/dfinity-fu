import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
`
export const Container = styled.div`
&:before {
    content: "";
    background-color: red;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url('https://lh3.googleusercontent.com/1EVmMZzJyHZkN7B6Hgq2BRz4GTfkuJH0AVPaaBTM2jpDtu6N_eIbsD7LizOmyielZQxmKwaZTBG7_x-kC9_T6AMqIFvQ3JnaNYRm=s550');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    filter: blur(8px);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

export const CopyContainer = styled.div`
  width: 50%;
`

export const Title = styled.div`
  position: relative;
  color: black;
  font-size: 46px;
  font-weight: bold;
`

export const Description = styled.div`
  color: #8a939b;
  font-weight: bold;
  margin-top: 0.8rem;
  margin-bottom: 2.5rem;
  font-size: 20px;
`

export const CtaContainer = styled.div`
  display: flex;  
`

export const AccentedButton = styled.div`
  position: relative;
  background-color: #2181e2;
  padding: 10px 30px;
  color: white;
  border-radius: 10px;
  &:hover {
    background-color: #42a0ff;
  }
  cursor: pointer;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.div`
  position: relative;
  background-color: white;
  color: #2181e2;
  border: 1px solid #2181e2;
  border-radius: 10px;
  padding: 10px 30px;
  margin-left: 25px;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  border-radius: 10px;
  position: relative;
`

export const InfoContainer = styled.div`
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  color: white;
`

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: black;
  font-weight: bold;
`

export const NftImage = styled.img`
  height: 500px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const Name = styled.div``

export const InfoIcon = styled.div``