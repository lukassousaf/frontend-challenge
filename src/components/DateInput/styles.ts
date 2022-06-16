import styled from "styled-components";

interface Props {
  focus: boolean;
}

export const Container = styled.label`
  display: flex;
  flex-direction: column;

  flex: 1;
  position: relative;
  background: none;
  width: 100%;
  max-height: 52px;
  margin: 10px 0;

  input {
    background-color: #202020;
    display: flex;
    font-size: 15px;
    min-height: 52px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #414141;
    padding: 10px 15px 0px 15px;
    color: #ffffff;

    &:active {
      outline: 1.5px solid #e7e7e7;
    }
  }
`;

export const Span = styled.span<Props>`
  position: absolute;
  background: none;
  cursor: text;
  transition: all 200ms ease;
  display: flex;
  justify-content: center;
  color: ${(Props) => (Props.focus ? "#A0A0A0" : "#888888")};
  margin: ${(Props) => (Props.focus ? "4px 15px" : "15px")};
  font-size: ${(Props) => (Props.focus ? "13px" : "16px")};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
