import React, { HTMLProps } from "react";
import { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Text,
  StyledCheckbox,
} from "./styles";
import { BsCheck2 } from "react-icons/bs";
import { useField } from "formik";

interface Props extends HTMLProps<HTMLInputElement> {
  // label: string;
}

export const Checkbox: React.FC<Props> = ({ children, ...rest }) => {
  const [checked, setChecked] = useState(false);
  const [field, meta] = useField({ ...rest } as any);
  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox onChange={handleCheckboxChange} />

      <StyledCheckbox checked={checked}>
        <BsCheck2 />
      </StyledCheckbox>
      <Text>{children}</Text>
    </CheckboxContainer>
  );
};
