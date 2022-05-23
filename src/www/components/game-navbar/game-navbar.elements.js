import styled from 'styled-components'
import * as palette from './types'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${palette.HEIGHT_NAVBAR};
    position: sticky;
    z-index: 100;
    top: 0; // cứng ở 1 chỗ 
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
    background-color: ${palette.PRIMARY};
`
export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const LeftImg = styled.img`
    height: ${palette.HEIGHT_NAVBAR};
    width: 200px;
`

export const LeftTitle = styled.p`
    position: absolute;
    left: 30%;
    top: 17%;
    font-size: ${palette.FONTSIZE_M};
`

export const MiddleWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const MidImg = styled.img`
    height: ${palette.HEIGHT_NAVBAR};
    width: 300px;
`

export const MidTitle = styled.div`
    position: absolute;
    left: 15%;
    font-size: ${palette.FONTSIZE_M};
`

export const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`

export const RightImg = styled.img`
    height: ${palette.HEIGHT_NAVBAR};
    width: 200px;
`

export const Option = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 28%;
    top: 23%;
`

export const Item = styled.div`
    width: 45px;
    margin-right: 10px;
`

export const ItemImg = styled.img`
    width: 100%;
`