import styled from "styled-components";

export const CartCoverScreen = styled.div`
  color: black;
  position: fixed;
  top: 0;
  right: 0;
  width: 100svw;
  height: 100svh;
  z-index: 1;

  display: flex;

  visibility: hidden;
`;

export const ExitArea = styled.div`
  width: 100%;
  background-color: #000;
  opacity: 0.7;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: white;
  min-width: 350px;
  height: 100svh;
`;

export const CardHeader = styled.div`
  padding: 35px 20px;
`;

export const CardTittle = styled.h3`
  font-size: 24px;
`;

export const MoviesList = styled.ul`
  height: calc(100% - 150px);
  overflow-y: scroll;
`;

export const CardFooter = styled.div`
  margin-top: 15px;
`;
