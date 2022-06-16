import React, { HTMLProps } from "react";
import { useState } from "react";
import {
  Container,
  Span,
  SelectMenu,
  OptionsContainer,
  Item,
  TextContainer,
} from "./styles";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useField } from "formik";
import { InputContainer } from "./styles";

interface Props extends HTMLProps<HTMLDivElement> {
  placeholder: string;
}

export const Dropdown: React.FC<Props> = ({
  placeholder,
  children,
  ...rest
}) => {
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [field, _meta, helpers] = useField({ ...rest } as any);
  const options = ["Brasil", "Estados Unidos", "Inglaterra"];

  function handleSelect(option: string) {
    setSelected(option);
    setIsActive(false);
    helpers.setValue(option);
  }

  return (
    <Container>
      <InputContainer>
        <Span>{children}</Span>
        <SelectMenu
          isActive={isActive}
          {...field}
          onClick={(e) => setIsActive(!isActive)}
        >
          <TextContainer isActive={isActive}>
            {selected || <span>{placeholder}</span>}
          </TextContainer>
          {isActive ? <FiChevronUp /> : <FiChevronDown />}
        </SelectMenu>

        {isActive && (
          <OptionsContainer>
            {options.map((option, index) => (
              <Item
                isLast={index === options.length - 1}
                onClick={() => handleSelect(option)}
              >
                {option}
              </Item>
            ))}
          </OptionsContainer>
        )}
      </InputContainer>
    </Container>
  );
};
