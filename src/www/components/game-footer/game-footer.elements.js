import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  position: fixed;
  z-index: 100;
  bottom: 0; // cứng ở 1 chỗ
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    opacity: ${(props) => props.active ? '1' : '0.7'};
    transform: ${(props) => props.active === true ? 'scale(1.1)' : 'scale(1)'};
    transition: all 0.25s ease;
    margin-right: 100px;
    &:hover {
      opacity: 1;
  }
`;

export const Image = styled.img`
  width: 60px;
  margin-bottom: 5px;
`;

export const Title = styled.div`
    font-size: 20px;
    margin-top: -7px;
`;
