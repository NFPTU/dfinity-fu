import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    border: 2px solid rgb(229, 232, 235);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 10px;
    padding: 0px 25px;
`

export const TopWrapperLeft = styled.div`
    display: flex;
    align-items: center;
`
export const TopWrapperTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 25px;
    border-right: 2px solid rgb(229, 232, 235);
    border-left: 2px solid rgb(229, 232, 235);
    border-bottom: 2px solid rgb(229, 232, 235);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    opacity: ${(props) => props.toggle === true ? 1 : 0};
`

export const BodyWrapperTop = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`

export const BodyWrapperTopItem = styled.div`
    flex: 1;
`

export const BodyWrapperBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
`

export const BodyWrapperBodyItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    width: 30px;
    margin-right: 5px;
`

export const Price = styled.div``