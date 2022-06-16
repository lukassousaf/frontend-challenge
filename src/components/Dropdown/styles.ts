import styled from "styled-components";

interface Props {
  isActive: boolean;
}

interface ItemProps {
  isLast: boolean;
}

export const Container = styled.div`
  flex: 1;
  position: relative;
  background: none;
  width: 100%;
  user-select: none;
  position: relative;
  max-height: 52px;

  margin: 10px 0;

  z-index: 1;
`;

export const TextContainer = styled.div<Props>`
  font-size: 16px;
  color: #ffffff;
  background: none;
  span {
    background: none;
    font-size: 16px;

    color: ${(props) => (props.isActive ? "#FFFFFF" : "#888888")};
  }
`;

export const SelectMenu = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 100%;
  min-height: 52px;

  flex: 1;
  padding: 10px 15px 0px 15px;
  background-color: #202020;
  border: 1px solid #414141;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  border-bottom: none;
  border-bottom: ${(props) => (props.isActive ? "none" : "1px solid #414141")};

  border-bottom-right-radius: ${(props) => (props.isActive ? "0px" : "8px")};
  border-bottom-left-radius: ${(props) => (props.isActive ? "0px" : "8px")};

  svg {
    color: #ffffff;
    background: none;
    height: 25px;
    width: 25px;
  }

  &:after {
    width: 95%;
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    bottom: 0;
    background: #414141;
    position: absolute;
    height: 1px;
  }
`;

export const OptionsContainer = styled.div`
  color: #333;
  background: none;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #414141;
  border-top: none;
`;

export const Item = styled.div<ItemProps>`
  background: none;
  color: #888888;
  padding: 15px;
  background-color: #202020;
  transition: all 0.2s;
  cursor: pointer;
  border-bottom-right-radius: ${(props) => (props.isLast ? "8px" : "0px")};
  border-bottom-left-radius: ${(props) => (props.isLast ? "8px" : "0px")};
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  background: none;
  color: #ffffff;
  transition: all 200ms ease;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
