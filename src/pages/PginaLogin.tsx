import { FunctionComponent } from "react";
import styled from "styled-components";
import InterfaceLogin from "../components/InterfaceLogin";
import BotoIniciarSesso1 from "../components/BotoIniciarSesso1";
import CriarConta from "../components/CriarConta";

const PginaLoginChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 90rem;
  height: 64rem;
`;
const Bg = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 120rem;
  height: 92.5rem;
`;
const ImagemFundoIcon = styled.img`
  position: absolute;
  top: -27.562rem;
  left: -100.812rem;
  width: 234.188rem;
  height: 131.75rem;
  object-fit: cover;
  mix-blend-mode: lighten;
`;
const LateralLogin = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  filter: blur(13.1px);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0),
    rgba(255, 255, 255, 0.12)
  );
  width: 32.112rem;
  height: 34.85rem;
`;
const Login = styled.b`
  position: absolute;
  top: 0rem;
  left: 7rem;
  letter-spacing: 1px;
  line-height: 6.375rem;
  display: flex;
  align-items: center;
  width: 8.063rem;
  height: 3.25rem;
`;
const FaaLoginPara = styled.div`
  position: absolute;
  top: 2.688rem;
  left: 0rem;
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
  line-height: 6.375rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 1.875rem;
`;
const LoginTexto = styled.div`
  position: absolute;
  top: 2.325rem;
  left: 32.938rem;
  width: 20rem;
  height: 4.563rem;
`;
const TelaLogin = styled.div`
  position: absolute;
  top: 14.55rem;
  left: 16.313rem;
  box-shadow: -15px 8px 19.8px rgba(0, 0, 0, 0.35);
  width: 55.944rem;
  height: 34.85rem;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const SejaBemVindoa = styled.div`
  position: absolute;
  top: 12rem;
  left: 18.625rem;
  font-size: var(--font-size-15xl);
  letter-spacing: 1px;
  line-height: 2.438rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  width: 81.25rem;
  height: 17.063rem;
`;
const AcesseNossaPlataforma = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
  font-weight: 500;
`;
const Nossa = styled.span`
  font-weight: 500;
`;
const Tecnologia = styled.span`
  font-weight: 800;
  font-family: var(--font-mulish);
`;
const PodePotencializar = styled.span`
  font-weight: 500;
  font-family: var(--font-mulish);
`;
const NossaTecnologiaPodePotencia = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
`;
const SuaGestoContratual = styled.p`
  margin: 0;
  font-weight: 500;
`;
const AcesseNossaPlataformaContainer = styled.span`
  width: 100%;
`;
const AcesseNossaPlataformaContainer1 = styled.div`
  position: absolute;
  top: 18.75rem;
  left: 18.625rem;
  line-height: 0.875rem;
  display: flex;
  align-items: center;
  width: 81.25rem;
  height: 17.063rem;
`;
const Grantosegurosimage1Icon = styled.img`
  position: absolute;
  top: 31.813rem;
  left: 20.938rem;
  width: 17.813rem;
  height: 17.813rem;
  object-fit: cover;
`;
const LogoGrantoIcon = styled.img`
  position: absolute;
  height: 5.66%;
  width: 9.1%;
  top: 7.52%;
  right: 44.51%;
  bottom: 86.82%;
  left: 46.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const PginaLoginRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 64rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
`;

const PginaLogin: FunctionComponent = () => {
  return (
    <PginaLoginRoot>
      <PginaLoginChild />
      <Bg />
      <ImagemFundoIcon alt="" src="/imagem-fundo@2x.png" />
      <TelaLogin>
        <InterfaceLogin />
        <LateralLogin />
        <BotoIniciarSesso1 />
        <CriarConta />
        <LoginTexto>
          <Login>LOGIN</Login>
          <FaaLoginPara> Faça login para acessar nosso sistema</FaaLoginPara>
        </LoginTexto>
      </TelaLogin>
      <SejaBemVindoa>Seja bem vindo(a),</SejaBemVindoa>
      <AcesseNossaPlataformaContainer1>
        <AcesseNossaPlataformaContainer>
          <AcesseNossaPlataforma>{`Acesse nossa plataforma e explore como `}</AcesseNossaPlataforma>
          <NossaTecnologiaPodePotencia>
            <Nossa>{`nossa `}</Nossa>
            <Tecnologia>tecnologia</Tecnologia>
            <PodePotencializar> pode potencializar</PodePotencializar>
          </NossaTecnologiaPodePotencia>
          <SuaGestoContratual>sua gestão contratual!</SuaGestoContratual>
        </AcesseNossaPlataformaContainer>
      </AcesseNossaPlataformaContainer1>
      <AcesseNossaPlataformaContainer1>
        <AcesseNossaPlataformaContainer>
          <AcesseNossaPlataforma>{`Acesse nossa plataforma e explore como `}</AcesseNossaPlataforma>
          <NossaTecnologiaPodePotencia>
            <Nossa>{`nossa `}</Nossa>
            <Tecnologia>tecnologia</Tecnologia>
            <PodePotencializar> pode potencializar</PodePotencializar>
          </NossaTecnologiaPodePotencia>
          <SuaGestoContratual>sua gestão contratual!</SuaGestoContratual>
        </AcesseNossaPlataformaContainer>
      </AcesseNossaPlataformaContainer1>
      <Grantosegurosimage1Icon alt="" src="/grantosegurosimage-1@2x.png" />
      <LogoGrantoIcon alt="" src="/logo-granto1@2x.png" />
    </PginaLoginRoot>
  );
};

export default PginaLogin;
