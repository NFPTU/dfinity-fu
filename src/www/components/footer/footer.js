import styled from "styled-components"

export const Container = styled.div`
    padding: 50px 50px 0px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TopWrapperLeft = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    width: 60px;
    margin-right: 10px;
`

export const Name = styled.div`
    font-size: 30px;
    font-weight: bold;
`

export const TopWrapperRight = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-left: 7px;
    &:hover {
        background-color: black;
        color: white;
        transition: all 0.1s ease;
        cursor: pointer;
    }
`

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`

export const BottomWrapperLeft = styled.div`
    justify-self: flex-start;
    font-size: 16px;
`

export const BottomWrapperCenter = styled.div`
    margin: 0px 20px;
    border-top: 2px solid black;
    width: 1040px;
`
export const BottomWrapperRight = styled.div`
    justify-self: flex-end;
    font-size: 14px;
`

export const BottomWrapperRightTop = styled.div`
    font-weight: bold;
`

export const LineFooter = styled.div`   
    margin-top: 30px;
    border-top: 10px solid #17ED97;
    width: 100%;
`

