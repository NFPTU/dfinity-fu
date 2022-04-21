import styled from "styled-components"

export const Container = styled.div`
    padding: 50px 150px;
`

export const Wrapper = styled.div`
    border: 2px solid black; 
    display: flex;
    align-items: center;
    padding: 50px;
    height: 130px;
    border-radius: 20px;
`

export const Item = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box; 
`

export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
`

export const Number = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-top: -25px;
    color: ${(props) => props.color}
`