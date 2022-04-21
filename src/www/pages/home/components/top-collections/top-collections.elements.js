import styled from "styled-components"

export const Container = styled.div`
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    margin-right: 10px;
`

// export const Group = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `

export const Select = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #0066FF;
    margin-right: 10px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
     user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`

export const Box = styled.div`
    width: 150px;
    box-shadow: 0px 0px 10px 1px #888888;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px;
    z-index: 1;
    margin-top: 185px;
    margin-left: 240px;
    position: absolute;
    background-color: white;
    display: ${props => props.display === false ? 'none' : 'block'};
    transition: all 0.5s ease;
`

export const BoxItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    padding: 5px 10px;
    &:hover {
        background-color: #eae7e7;
        transition: all 0.5s;
    }
`

export const BoxItemName = styled.div`
    margin-right: 10px;
`

export const TopRight = styled.div`

`

export const SeeAllBtn = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 10px;
    &:hover {
        color: white;
        background-color: black;
        transition: all 0.1s ease;
    }
    cursor: pointer;
`

export const Body = styled.div`
`

export const BodyItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
`

export const BodySubItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 340px;
    margin-bottom: 20px;
`

export const Id = styled.div`
    font-size: 16px;
    margin-right: 20px;
    color: #6E6E6E;
`

export const Image = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NFTName = styled.div`
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
`

export const Price = styled.div`
    font-size: 14px;
    color: #6E6E6E;
`

