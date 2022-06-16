import styled from "styled-components";

export const SolidButton = styled.button`
  display: flex;
  background-color: ${(props) => (props.disabled ? "#2A2A2A" : "#00F2B1")};
  color: ${(props) => (props.disabled ? "#888888" : "#FFF")};
  height: 56px;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  justify-content: center;
  width: 100%;
  align-items: center;
  text-decoration: none;
`;
