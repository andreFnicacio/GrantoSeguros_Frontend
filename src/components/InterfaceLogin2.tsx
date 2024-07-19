import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type InterfaceLoginType = {
  className?: string;
};

const InterfaceLoginChild = styled.div`
  width: 27.619rem;
  height: 34.781rem;
  position: relative;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const Login = styled.h1`
  margin: 0;
  width: 8.063rem;
  position: relative;
  font-size: var(--font-size-5xl);
  letter-spacing: 1px;
  line-height: 3.25rem;
  font-weight: 700;
  font-family: var(--font-mulish);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 5.125rem;
  }
`;
const EmailInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl) 0rem var(--padding-34xl);
`;
const FaaLoginPara = styled.div`
  align-self: stretch;
  height: 1.875rem;
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
  line-height: 6.375rem;
  font-weight: 600;
  font-family: var(--font-mulish);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 4;
  margin-top: -0.563rem;
`;
const LoginFields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ForgotPassword = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-27xl) var(--padding-2xs) var(--padding-19xl);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const EMail = styled.div`
  width: 10.381rem;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  z-index: 1;
`;
const EmailExampleChild = styled.div`
  height: 2.294rem;
  width: 21.794rem;
  position: relative;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Emailexemplocom = styled.input`
  width: 10.35rem;
  border: none;
  outline: none;
  font-family: var(--font-inter);
  font-size: var(--font-size-xs);
  background-color: transparent;
  height: 1.231rem;
  position: relative;
  color: var(--color-darkgray);
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  padding: 0;
  z-index: 2;
`;
const EmailExample = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lgi) var(--padding-12xs);
  max-width: 100%;
  z-index: 1;
`;
const EmailInput1 = styled.div`
  width: 21.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
  max-width: 100%;
`;
const Senha = styled.div`
  width: 10.331rem;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  z-index: 1;
`;
const PasswordField = styled(TextField)`
  border: none;
  background-color: transparent;
  width: 21.681rem;
  height: 2.338rem;
  font-family: var(--font-inter);
  font-size: var(--font-size-xs);
  color: var(--color-darkgray);
  max-width: 100%;
  z-index: 1;
`;
const EsqueceuASenha = styled.div`
  height: 1.256rem;
  width: 10.331rem;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const LoginField = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;
const EmailField = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs-8);
  max-width: 100%;
`;
const LoginInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-3);
  max-width: 100%;
`;
const BotoIniciarSesso = styled(Button)`
  width: 21.794rem;
  height: 2.775rem;
  max-width: 100%;
  flex-shrink: 0;
  cursor: pointer;
  z-index: 5;
`;
const LoginFields1 = styled.form`
  margin: 0;
  align-self: stretch;
  height: 19.213rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-46xl-4);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-24xl);
    box-sizing: border-box;
  }
`;
const CrieUmaConta = styled.span``;
const GrantoSeguros = styled.b`
  color: var(--color-darkblue-100);
`;
const CrieUmaContaContainer = styled.span`
  width: 100%;
`;
const CrieUmaContaContainer1 = styled.div`
  position: absolute;
  top: 0.419rem;
  left: calc(50% - 256.65px);
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  width: 32.063rem;
  height: 1.5rem;
`;
const UtilizandoAPlataforma = styled.div`
  position: absolute;
  top: -2.394rem;
  left: 2.106rem;
  font-size: var(--font-size-xs);
  letter-spacing: 1px;
  line-height: 6.375rem;
  font-weight: 600;
  color: var(--color-gray-200);
  text-align: left;
  display: flex;
  align-items: center;
  width: 18.063rem;
  height: 2.063rem;
`;
const CriarConta = styled.div`
  width: 21.794rem;
  height: 2.775rem;
  position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-mediumaquamarine);
  box-sizing: border-box;
  max-width: 100%;
  cursor: pointer;
  z-index: 5;
`;
const InterfaceLoginRoot = styled.div`
  width: 27.644rem;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl-2) 0rem var(--padding-33xl-6) var(--padding-19xl);
  box-sizing: border-box;
  gap: var(--gap-95xl-9);
  max-width: 100%;
  z-index: 3;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-mulish);
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-5xl);
    padding-bottom: var(--padding-15xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-38xl);
  }
`;

const InterfaceLogin: FunctionComponent<InterfaceLoginType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(() => {
    navigate("/backoffice1");
  }, [navigate]);

  const onCriarContaContainerClick = useCallback(() => {
    navigate("/criar-conta1");
  }, [navigate]);

  return (
    <InterfaceLoginRoot className={className}>
      <InterfaceLoginChild />
      <LoginFields1>
        <ForgotPassword>
          <LoginFields>
            <EmailInput>
              <Login>LOGIN</Login>
            </EmailInput>
            <FaaLoginPara> Faça login para acessar nosso sistema</FaaLoginPara>
          </LoginFields>
        </ForgotPassword>
        <LoginInput>
          <EmailInput1>
            <EMail>E-mail</EMail>
            <EmailExample>
              <EmailExampleChild />
              <Emailexemplocom placeholder="email@exemplo.com" type="text" />
            </EmailExample>
          </EmailInput1>
          <EmailField>
            <Senha>Senha</Senha>
            <PasswordField
              placeholder="************"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#7c827f" },
                "& .MuiInputBase-root": { height: "37.4px", fontSize: "12px" },
                "& .MuiInputBase-input": { color: "#aaa" },
                width: "346.9px",
              }}
            />
            <LoginField>
              <EsqueceuASenha>Esqueceu a senha?</EsqueceuASenha>
            </LoginField>
          </EmailField>
        </LoginInput>
        <BotoIniciarSesso
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#4510a3",
            fontSize: "18",
            background: "#0cd2ab",
            borderRadius: "4px",
            "&:hover": { background: "#0cd2ab" },
            width: 348.7,
            height: 44.4,
          }}
          onClick={onBotoIniciarSessoClick}
        >
          Login
        </BotoIniciarSesso>
      </LoginFields1>
      <CriarConta onClick={onCriarContaContainerClick}>
        <CrieUmaContaContainer1>
          <CrieUmaContaContainer>
            <CrieUmaConta>{`Crie uma conta na `}</CrieUmaConta>
            <GrantoSeguros>Granto Seguros</GrantoSeguros>
          </CrieUmaContaContainer>
        </CrieUmaContaContainer1>
        <UtilizandoAPlataforma>{`Utilizando a plataforma pela primeira vez? `}</UtilizandoAPlataforma>
      </CriarConta>
    </InterfaceLoginRoot>
  );
};

export default InterfaceLogin;
