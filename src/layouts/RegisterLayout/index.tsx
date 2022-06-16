import * as Yup from "yup";
import React, { HTMLProps } from "react";
import { useState } from "react";
import {
  FirstSection,
  SecondSection,
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
import globe from "../../assets/globe.png";
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

export const RegisterLayout: React.FC<Props> = ({ children }) => {
  const initialValues: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    dateOfBirthday: {} as Date,
    bio: "",
    receiveNotifications: false,
  };

  const { createUser } = useRegister();

  return (
    <Layout>
      <FirstSection>
        <FormHeader>
          <FormTitle>Cadastre-se</FormTitle>
          <FormSubTitle>Para começar, insira os dados abaixo:</FormSubTitle>
        </FormHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={async (values, actions) => {
            await createUser(values);
          }}
        >
          {(props: FormikProps<User>) => (
            <FormBody>
              <TextInput
                name="firstName"
                onClick={() => console.log(!props.isValid && props.dirty)}
              >
                Nome
              </TextInput>
              <TextInput name="lastName">Sobrenome</TextInput>
              <TextInput name="email" type="email">
                E-mail
              </TextInput>
              <DateInput mask="" name="dateOfBirthday">
                Data de nascimento
              </DateInput>
              <TextInput name="password" isPassword>
                Senha
              </TextInput>
              <Dropdown name="country" placeholder="Escolha seu país" />
              <InputTextarea name="bio">Bio</InputTextarea>
              <Button disabled={props.isValid && !props.dirty}>
                Cadastrar
              </Button>
              <Checkbox name="receiveNotifications">
                Desejo receber notificações
              </Checkbox>
            </FormBody>
          )}
        </Formik>
      </FirstSection>
      <SecondSection>
        <Image src={globe.src} alt="Globo" />
        <CTAContainer>
          <Title>Teste técnico</Title>

          <Subtitle>
            Controle suas contas nacionais
            <br /> e internacionais em um único lugar!
          </Subtitle>
        </CTAContainer>
      </SecondSection>
    </Layout>
  );
};
