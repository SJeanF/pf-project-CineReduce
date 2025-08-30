import styled from "styled-components";

export const MovieListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const MovieActions = styled.div`
  display: flex;
  gap: 5px;
`;

export const BaseButton = styled.button`
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
`;

export const AlterButton = styled(BaseButton)`
  background-color: #007bff;
`;

export const RemoveButton = styled(BaseButton)`
  background-color: red;
`;
