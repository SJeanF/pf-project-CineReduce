import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100svw;
  background-color: #0c0020;
  padding: 16px 0;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const PageTittle = styled.h2`
  cursor: pointer;
`;

export const SearchArea = styled.form`
  width: 400px;
`;

export const SearchButton = styled.button`
  padding: 8px;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 80%;
  padding: 8px 24px;
  outline: none;
`;

export const CartButton = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
