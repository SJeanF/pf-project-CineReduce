import styled from "styled-components";

export const CardContainer = styled.li`
  list-style: none;
  width: 100%;
  max-width: 180px;
  height: 100%;
  max-height: 320px;
  padding-top: 24px;
  border-left: 8px solid #0c0020;
  border-right: 8px solid #0c0020;
  border-radius: 6px;
  background-color: #0c0020;
`;

export const CardMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 160px;
  max-height: 240px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0.3;
    background: linear-gradient(0deg, black, transparent);
  }
`;

export const CardImage = styled.img`
  max-width: 160px;
  max-height: 240px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 10px 0;
`;

export const CartMovieTittle = styled.h5`
  font-size: 18px;
  margin-bottom: 4px;
  max-width: 130px;
  width: 100%;
`;

export const CardPriece = styled.p`
  font-size: 12px;
`;

export const CardAddCartButton = styled.button`
  max-width: 100%;
  margin-left: 6px;
  padding: 4px 6px;
  border: none;
  border-radius: 2px;
  background-color: #036903ff;
  color: white;
  cursor: pointer;
`;
