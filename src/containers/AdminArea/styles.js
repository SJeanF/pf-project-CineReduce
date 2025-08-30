import styled from "styled-components";

export const Header = styled.header`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em 0;
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1em 0;
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
`;

export const MovieForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const BaseButton = styled.button`
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const AddButton = styled(BaseButton)`
  padding: 10px;
  background-color: ${(props) => (props.$formMode ? "#388d3c" : "blue")};
`;

export const CancelButton = styled(BaseButton)`
  padding: 10px;
  background-color: red;
`;

export const BackLink = styled.p`
  display: block;
  margin-top: 20px;
  text-align: center;
  color: rgb(46, 46, 214);
  text-decoration: none;
`;
