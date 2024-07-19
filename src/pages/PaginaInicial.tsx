import { FunctionComponent } from "react";
import styled from "styled-components";
import GroupComponent from "../components/GroupComponent";
import Quadrados1 from "../components/Quadrados1";
import Quadrados from "../components/Quadrados";
import BotoIniciarSesso from "../components/BotoIniciarSesso";

const PaginaInicialChild = styled.div`
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
const DesignSemNome = styled.img`
  width: 122.688rem;
  position: relative;
  height: 93.25rem;
  object-fit: cover;
  mix-blend-mode: screen;
`;
const BgChild = styled.div`
  width: 22.063rem;
  position: relative;
  border-radius: 41px;
  background-color: #461aa5;
  height: 21.25rem;
`;
const Bg = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  box-shadow: 32px 35px 46.2px rgba(0, 0, 0, 0.37) inset;
  width: 90rem;
  height: 115rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const MeninaDoFundo = styled.img`
  position: absolute;
  top: -1.125rem;
  left: 0rem;
  width: 142rem;
  height: 73rem;
  object-fit: cover;
  opacity: 0.4;
  mix-blend-mode: soft-light;
`;
const NossaFerramenta = styled.p`
  margin-block-start: 0;
  margin-block-end: 9px;
  white-space: pre-wrap;
`;
const OrganizaEUtiliza = styled.p`
  margin: 0;
`;
const NossaFerramentaTransformaContainer = styled.span`
  width: 100%;
`;
const NossaFerramentaTransformaContainer1 = styled.div`
  position: absolute;
  top: 12.938rem;
  left: 0.25rem;
  letter-spacing: 2px;
  line-height: 1.438rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 82.5rem;
  height: 9.313rem;
`;
const SimpliqueAAnlise = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: 4.625rem;
  letter-spacing: 1px;
  line-height: 5.125rem;
  font-weight: 800;
  color: var(--color-white);
  display: flex;
  align-items: center;
  width: 69.938rem;
  height: 17.063rem;
`;
const TituloESubtitulo = styled.div`
  position: absolute;
  top: 7rem;
  left: 6.563rem;
  width: 82.75rem;
  height: 22.25rem;
`;
const QuadradosChild = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  width: 16.125rem;
  height: 5.125rem;
`;
const Quadrados2 = styled.div`
  position: absolute;
  height: calc(100% - 938px);
  width: calc(100% - 870px);
  top: 28.5rem;
  right: 47.813rem;
  bottom: 30.125rem;
  left: 6.563rem;
`;
const PaginaInicialRoot = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-darkblue-100);
  height: 64rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: #bfbfbf;
  font-family: var(--font-mulish);
`;

const PaginaInicial: FunctionComponent = () => {
  return (
    <PaginaInicialRoot>
      <PaginaInicialChild />
      <Bg>
        <DesignSemNome alt="" src="/design-sem-nome-1@2x.png" />
        <BgChild />
      </Bg>
      <MeninaDoFundo alt="" src="/menina-do-fundo@2x.png" />
      <GroupComponent />
      <TituloESubtitulo>
        <NossaFerramentaTransformaContainer1>
          <NossaFerramentaTransformaContainer>
            <NossaFerramenta>
              Nossa ferramenta transforma a maneira como você examina,
            </NossaFerramenta>
            <OrganizaEUtiliza>
              organiza e utiliza informações contratuais.
            </OrganizaEUtiliza>
          </NossaFerramentaTransformaContainer>
        </NossaFerramentaTransformaContainer1>
        <SimpliqueAAnlise>
          Simplique a análise de Contratos com a Ursula
        </SimpliqueAAnlise>
      </TituloESubtitulo>
      <Quadrados2>
        <Quadrados1 />
        <Quadrados />
        <QuadradosChild />
      </Quadrados2>
      <BotoIniciarSesso />
    </PaginaInicialRoot>
  );
};

export default PaginaInicial;
