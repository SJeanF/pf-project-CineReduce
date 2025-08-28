import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  margin-top: 32px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const SectionTittle = styled.h3`
  color: white;
  font-size: 24px;
`;

export const SectionList = styled.ul`
  max-width: 1024px;
  height: 340px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  gap: 16px;
`;
