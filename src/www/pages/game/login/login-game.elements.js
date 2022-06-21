import styled from 'styled-components'

export const Container = styled.div`
   background-size: cover;
   background-repeat: no-repeat;
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-image: url('/images/background.png')
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: #fed234;
    text-shadow: 2px 0 2px #e3a404, -2px 0 0 #e3a404, 0 2px 0 #e3a404, 0 -2px 0 #e3a404, 1px 1px #e3a404, -1px -1px 0 #e3a404, 1px -1px 0 #e3a404, -1px 1px 0 #e3a404;
    font-size: 100px;
`

export const PlayBtn = styled.div`
    width: 250px;
    position: relative;
`

export const ImgBtn = styled.img`
    width: 100%;
`
