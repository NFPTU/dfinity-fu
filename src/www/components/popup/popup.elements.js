import styled from 'styled-components'

export const Box = styled.div`
  	position: absolute;
    top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400;
	background-color: white;
	border: 2px solid #000;
	box-shadow: 24;
	padding: 4;
    display: flex;
    flex-wrap: wrap;
	padding: 28px;
`

export const CardWrapper = styled.div`
    display: flex;
    margin: 10px;
`
export const Card = styled.div`
    display: flex;
	margin: 35px;
	margin-top: 10px;
	flex-wrap: wrap;
	justify-content: space-around;


    
`
export const BackgroundNav = styled.div`
	position: relative;
    
    
`
export const Text = styled.div`
	background-color: green;
    width: 100%;
    display: flex;
    /* align-items: center; */
`
export const TextNav = styled.div`

	text-align:right;
	font-size: 28px;
    padding: 5px;
    width: 55%;

`

export const CancelButton = styled.div`
	width: 45%;
	text-align:right;
	cursor: pointer;
	padding-top: 6px;
`