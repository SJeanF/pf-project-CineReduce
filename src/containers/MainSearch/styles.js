import styled from "styled-components";

export const SearchResultContainer = styled.main`
  background-color: #091406ff;
  width: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchSectionContainer = styled.div`
  max-width: 1024px;
`;

export const SearchSectionHeader = styled.div`
  margin-top: 20px;
`;

export const SearchSectionTitle = styled.h3`
  color: white;
  text-align: center;
`;

export const SearchSectionMoviesList = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  gap: 16px;
  margin-bottom: 20px;
`;
