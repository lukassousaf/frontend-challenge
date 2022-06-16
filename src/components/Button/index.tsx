import React, { HTMLProps, useState } from "react";
import { SolidButton } from "./styles";
import { useField } from "formik";

interface Props extends HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children, disabled }) => {
  return (
    <SolidButton type="submit" disabled={disabled}>
      {children}
    </SolidButton>
  );
};
