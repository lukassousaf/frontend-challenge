import styled from "styled-components";

interface Props {
  checked: any;
}

export const CheckboxContainer = styled.div<Props>`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  background-color: ${(Props) => (Props.checked ? "transparent" : "#00F2B1")};
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: ${(Props) => (Props.checked ? "2px solid #b8b8b8" : "0px")};
`;

export const Text = styled.label`
  display: flex;
  background: none;
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  color: #e7e7e7;
`;

export const StyledCheckbox = styled.div<Props>`
  background-color: ${(Props) => (Props.checked ? "transparent" : "#00F2B1")};
  display: flex;
  height: 20px;
  width: 20px;
  appearance: none;
  border-radius: 4px;
  border: ${(Props) => (Props.checked ? "2px solid #b8b8b8" : "none")};

  svg {
    background: none;
    display: ${(Props) => (Props.checked ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
  }
`;
