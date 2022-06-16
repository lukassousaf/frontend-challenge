import React, { HTMLProps } from "react";
import { useState } from "react";
import {
  Container,
  IconContainer,
  InputContainer,
  PasswordContainer,
  Span,
} from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useField } from "formik";
interface Props extends HTMLProps<HTMLInputElement> {
  isPassword?: boolean;
}

export const TextInput: React.FC<Props> = ({
  isPassword,
  type = "text",
  children,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField({ ...rest } as any);

  function onFocus() {
    setFocus(true);
  }
  function onBlur() {
    if (field.value.length === 0) {
      setFocus(false);
    }
  }
  function handleChangePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Container>
      <InputContainer>
        <Span focus={focus}>{children}</Span>
        <input
          type={isPassword && showPassword ? "password" : type}
          {...field}
          {...rest}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <IconContainer>
          {isPassword ? (
            <PasswordContainer onClick={handleChangePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </PasswordContainer>
          ) : null}
        </IconContainer>
      </InputContainer>
      {/* {meta.touched && meta.error ? <Error>{meta.error}</Error> : null */}
    </Container>
  );
};
