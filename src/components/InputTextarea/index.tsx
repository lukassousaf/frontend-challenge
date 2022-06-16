import { useField } from "formik";
import React, { HTMLProps } from "react";
import { useState } from "react";
import { Container, InputContainer, Span } from "./styles";

interface Props extends HTMLProps<HTMLTextAreaElement> {}

export const InputTextarea: React.FC<Props> = ({ children, ...rest }) => {
  const [focus, setFocus] = useState(false);
  const [field] = useField({ ...rest } as any);

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
        <textarea
          {...field}
          {...rest}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
};
