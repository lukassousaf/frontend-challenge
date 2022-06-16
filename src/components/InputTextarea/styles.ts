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
  margin: 10px 0;
  max-height: 100px;

  textarea {
    height: 72px;
    resize: none;
    background-color: #202020;
    display: flex;
    font-size: 15px;
    flex: 1;
    border-radius: 8px;
    border: 1px solid #414141;
    padding: 20px 15px;
    color: #ffffff;
    &:active {
      outline: 1.5px solid #e7e7e7;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background: #2a2a2a;
      border-radius: 8px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
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
