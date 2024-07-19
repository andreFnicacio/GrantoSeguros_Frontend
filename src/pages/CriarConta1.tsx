import { FunctionComponent } from "react";
import styled from "styled-components";
import InterfaceLogin1 from "../components/InterfaceLogin1";
import BotoIniciarSesso2 from "../components/BotoIniciarSesso2";
import CriarConta2 from "../components/CriarConta2";

const CriarContaChild = styled.div`
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
const CriarConta = styled.b`
  position: absolute;
  top: 0rem;
  left: 4.875rem;
  letter-spacing: 1px;
  line-height: 6.375rem;
  display: flex;
  align-items: center;
  width: 10.531rem;
  height: 3.25rem;
`;
const PreenchaOsCampos = styled.div`
  position: absolute;
  top: 2.813rem;
  left: 0rem;
  font-size: var(--font-size-sm);
  line-height: 6.375rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 25.188rem;
  height: 1.875rem;
`;
const LoginTexto = styled.div`
  position: absolute;
  top: 1.763rem;
  left: 32.125rem;
  width: 25.188rem;
  height: 4.688rem;
`;
const Ou = styled.div`
  position: absolute;
  top: 0rem;
  left: 9.875rem;
  display: inline-block;
  width: 25.938rem;
  height: 3.313rem;
`;
const OuChild = styled.img`
  position: absolute;
  top: 0.75rem;
  left: 13.938rem;
  max-height: 100%;
  width: 7.75rem;
`;
const OuItem = styled.img`
  position: absolute;
  top: 0.75rem;
  left: 0rem;
  max-height: 100%;
  width: 7.188rem;
`;
const Ou1 = styled.div`
  position: absolute;
  top: 25.575rem;
  left: 30.563rem;
  width: 35.813rem;
  height: 3.313rem;
  font-size: var(--font-size-xs);
  color: #c6bdbd;
  font-family: var(--font-inter);
`;
const TelaLogin = styled.div`
  position: absolute;
  top: 14.488rem;
  left: 16.188rem;
  filter: drop-shadow(-15px 8px 19.8px rgba(0, 0, 0, 0.35));
  width: 66.375rem;
  height: 34.856rem;
  color: var(--color-black);
`;
const CrieSuaConta = styled.div`
  position: absolute;
  top: 17.563rem;
  left: 18.625rem;
  font-size: var(--font-size-15xl);
  letter-spacing: 1px;
  line-height: 2.438rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  width: 23.125rem;
  height: 5.125rem;
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
const Grantosegurosimage21Icon = styled.img`
  position: absolute;
  top: 32rem;
  left: 23.75rem;
  width: 14.25rem;
  height: 19.188rem;
  object-fit: cover;
`;
const EDescubraUma = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
  font-weight: 500;
  white-space: pre-wrap;
`;
const Otimizar = styled.span`
  font-weight: 800;
  font-family: var(--font-mulish);
`;
const SeuTrabalhoCom = styled.span`
  font-weight: 500;
`;
const OtimizarSeuTrabalhoComNoss = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
`;
const Plataforma = styled.p`
  margin: 0;
  font-weight: 500;
`;
const EDescubraUmaContainer = styled.span`
  width: 100%;
`;
const EDescubraUmaContainer1 = styled.div`
  position: absolute;
  top: 18.75rem;
  left: 18.625rem;
  font-size: var(--font-size-xl);
  line-height: 0.875rem;
  display: flex;
  align-items: center;
  width: 23.125rem;
  height: 17.063rem;
`;
const CriarContaRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 64rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
`;

const CriarConta1: FunctionComponent = () => {
  return (
    <CriarContaRoot>
      <CriarContaChild />
      <Bg />
      <ImagemFundoIcon alt="" src="/imagem-fundo@2x.png" />
      <TelaLogin>
        <InterfaceLogin1 />
        <LateralLogin />
        <BotoIniciarSesso2 />
        <CriarConta2 />
        <LoginTexto>
          <CriarConta>Criar Conta</CriarConta>
          <PreenchaOsCampos>
            Preencha os campos abaixo para criar sua conta
          </PreenchaOsCampos>
        </LoginTexto>
        <Ou1>
          <Ou>{`OU `}</Ou>
          <OuChild alt="" src="/vector-5.svg" />
          <OuItem alt="" src="/vector-6.svg" />
        </Ou1>
      </TelaLogin>
      <CrieSuaConta>Crie sua conta,</CrieSuaConta>
      <LogoGrantoIcon alt="" src="/logo-granto1@2x.png" />
      <Grantosegurosimage21Icon alt="" src="/grantosegurosimage2-1@2x.png" />
      <EDescubraUmaContainer1>
        <EDescubraUmaContainer>
          <EDescubraUma>{`E descubra uma nova abordagem para   `}</EDescubraUma>
          <OtimizarSeuTrabalhoComNoss>
            <Otimizar>otimizar</Otimizar>
            <SeuTrabalhoCom>{` seu trabalho com nossa `}</SeuTrabalhoCom>
          </OtimizarSeuTrabalhoComNoss>
          <Plataforma>plataforma!</Plataforma>
        </EDescubraUmaContainer>
      </EDescubraUmaContainer1>
    </CriarContaRoot>
  );
};

export default CriarConta1;
