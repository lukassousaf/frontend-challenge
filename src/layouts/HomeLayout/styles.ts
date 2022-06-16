import { Form } from "formik";
import styled from "styled-components";
import globe from "../../../assets/globe.png";
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(29, 29, 29, 0.5);
  margin: 200px 400px;
  border-radius: 8px;
  border: 2px solid #2a2a2a;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 0 15%;
`;

export const FormBody = styled(Form)`
  padding: 0px 90px;
  display: flex;

  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex: 1;
  justify-content: center;
`;

export const FormTitle = styled.h1`
  background: none;
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
`;
export const FormSubTitle = styled.p`
  background: none;
  color: #e7e7e7;
  font-size: 14px;
  font-weight: 300;
`;

export const Image = styled.img`
  display: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  max-height: 100%;
  max-width: 100%;
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: none;

  /* align-items: left; */
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 45px;
  font-weight: 700;
  background: none;
  &:after {
    content: "";
    display: block;
    background-color: #00f2b1;
    width: 43px;
    height: 11px;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  background: none;
`;
