import * as Yup from "yup";
import React, { HTMLProps } from "react";
import { useState } from "react";
import {
  FirstSection,
  Layout,
  Title,
  Image,
  CTAContainer,
  Subtitle,
  FormTitle,
  FormSubTitle,
  FormHeader,
  FormBody,
} from "./styles";
import fullglobe from "../../assets/fullglobe.png";
import { Form, Formik, FormikProps } from "formik";
import { User } from "../../interfaces";
import { TextInput } from "../../components/TextInput";
import { DateInput } from "../../components/DateInput";
import { Dropdown } from "../../components/Dropdown";
import { Button } from "../../components/Button";
import { InputTextarea } from "../../components/InputTextarea";
import { Checkbox } from "../../components/Checkbox";
import { useRegister } from "../../hooks";
interface Props extends HTMLProps<HTMLInputElement> {
  // label: string;
}

const schema = Yup.object({
  firstName: Yup.string()
    .max(15, "É necessário 15 caracteres ou menos")
    .required("O campo é obrigatório"),
  lastName: Yup.string()
    .max(20, "É necessário 20 caracteres ou menos")
    .required("O campo é obrigatório"),
  email: Yup.string().email("Email inválido").required("O campo é obrigatório"),
  password: Yup.string().max(25).required("O campo é obrigatório"),
  country: Yup.string().required("O campo é obrigatório"),
  dateOfBirthday: Yup.string().required("O campo é obrigatório"),
  bio: Yup.string().max(255).required("O campo é obrigatório"),
  receiveNotifications: Yup.boolean(),
});

export const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <FirstSection>
        <Title>Bem Vindo</Title>

        <Subtitle>Você nasceu no dia</Subtitle>
      </FirstSection>

      <Image src={fullglobe.src} alt="Globo" />
    </Layout>
  );
};
