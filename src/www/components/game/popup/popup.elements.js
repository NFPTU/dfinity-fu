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
	flex-direction: column;
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

export const TopWrapper = styled.div`
	width: 100%;
	position: relative;
`

export const Text = styled.div`
	background-color: green;
    width: 100%;
    display: flex;
	justify-content: center;
    align-items: center;
`

export const TextNav = styled.div`
	font-size: 28px;
    padding: 5px;
`

export const CancelButton = styled.div`
	cursor: pointer;
	color: red;
	position: absolute;
    width: 100%;
    top: 14%;
    left: 87%;
`

export const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const BtnOk = styled.div`
	width: 76px;
    height: 31px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
	cursor: pointer;
`