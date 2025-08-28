import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0c0020;
  padding: 16px 0;
  color: white;
`;

export const SearchArea = styled.div`
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
