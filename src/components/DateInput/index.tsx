import React from "react";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

import { useState } from "react";
import { Container, InputContainer, Span } from "./styles";
import { useField } from "formik";

interface InputProps extends InputMaskProps {}

export const DateInput: React.FC<InputProps> = ({ children, ...rest }) => {
  const [field] = useField({ ...rest } as any);
  const [focus, setFocus] = useState(field.value.length > 0);

  function onFocus() {
    setFocus(true);
  }

  function onBlur() {
    if (field.value.length === 0) {
      setFocus(false);
    }
  }

  return (
    <Container>
      <InputContainer>
        <Span focus={focus}>{children}</Span>
        <InputMask
          {...field}
          {...rest}
          //@ts-ignore (Bug react-input-mask types)
          maskChar=""
          onFocus={onFocus}
          mask="99/99/9999"
          onBlur={onBlur}
        />
      </InputContainer>
    </Container>
  );
};
