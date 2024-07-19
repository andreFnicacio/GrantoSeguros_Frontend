import { FunctionComponent } from "react";
import styled from "styled-components";
import MenuLogo from "./MenuLogo";

export type MENULATERALType = {
  className?: string;
};

const BgMenuLateral = styled.div`
  position: absolute;
  top: 0rem;
  left: 3.125rem;
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-silver-100);
  box-sizing: border-box;
  width: 12.5rem;
  height: 94rem;
`;
const BHomeChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 3.125rem;
  background-color: var(--color-whitesmoke-200);
  width: 12.25rem;
  height: 2.625rem;
`;
const Home = styled.div`
  position: absolute;
  top: 0.581rem;
  left: calc(50% - 136.5px);
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.063rem;
  height: 1.5rem;
`;
const BHomeItem = styled.img`
  position: absolute;
  height: 54.05%;
  width: 8.79%;
  top: 21.43%;
  right: 64.47%;
  bottom: 24.52%;
  left: 26.74%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BHomeInner = styled.div`
  position: absolute;
  top: 0rem;
  left: 15.375rem;
  border-radius: var(--br-12xs);
  background-color: var(--color-darkblue-100);
  width: 0.188rem;
  height: 2.625rem;
`;
const BHome = styled.div`
  position: absolute;
  top: 18.5rem;
  left: 0rem;
  width: 17.063rem;
  height: 2.625rem;
`;
const BEnviarArquivoChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.563rem;
  border-radius: var(--br-2xs);
  background-color: var(--color-darkblue-100);
  width: 11.5rem;
  height: 3.125rem;
`;
const EnviarArquivo = styled.div`
  position: absolute;
  top: 0.75rem;
  left: calc(50% - 136.5px);
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.063rem;
  height: 1.5rem;
`;
const B = styled.b`
  position: absolute;
  top: 0.813rem;
  left: calc(50% - 96.5px);
  font-size: var(--font-size-29xl);
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 0.75rem;
`;
const BEnviarArquivo = styled.div`
  position: absolute;
  top: 13.75rem;
  left: 2.063rem;
  width: 17.063rem;
  height: 3.125rem;
  color: var(--color-white);
`;
const UserIcon = styled.img`
  position: absolute;
  height: 3.59%;
  width: 17.65%;
  top: 61.57%;
  right: 41.18%;
  bottom: 34.84%;
  left: 41.18%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
`;
const MenuLateralRoot = styled.div`
  position: absolute;
  top: -1.187rem;
  left: -3.125rem;
  width: 19.125rem;
  height: 94rem;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-mulish);
`;

const MENULATERAL: FunctionComponent<MENULATERALType> = ({
  className = "",
}) => {
  return (
    <MenuLateralRoot className={className}>
      <BgMenuLateral />
      <BHome>
        <BHomeChild />
        <Home>Home</Home>
        <BHomeItem alt="" src="/group-14.svg" />
        <BHomeInner />
      </BHome>
      <BEnviarArquivo>
        <BEnviarArquivoChild />
        <EnviarArquivo> Enviar Arquivo</EnviarArquivo>
        <B>+</B>
      </BEnviarArquivo>
      <MenuLogo />
      <UserIcon alt="" src="/user.svg" />
    </MenuLateralRoot>
  );
};

export default MENULATERAL;
