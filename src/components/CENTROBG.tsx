import { FunctionComponent } from "react";
import styled from "styled-components";

export type CENTROBGType = {
  className?: string;
};

const BlankLine = styled.span`
  font-size: var(--font-size-19xl);
`;
const SejaBemVindoa = styled.span``;
const SejaBemVindoaAoSeuPort = styled.p`
  margin: 0;
`;
const ArrasteSeusArquivos = styled.p`
  margin: 0;
  font-size: var(--font-size-xl);
`;
const SejaBemVindoaContainer = styled.div`
  position: absolute;
  top: 17.25rem;
  left: calc(50% - 388px);
`;
const DocumentIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 18.25rem;
  width: 15.063rem;
  height: 15.063rem;
  overflow: hidden;
`;
const CentroBgRoot = styled.div`
  position: absolute;
  top: 22.563rem;
  left: calc(50% - 303px);
  width: 48.5rem;
  height: 30rem;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-mulish);
`;

const CENTROBG: FunctionComponent<CENTROBGType> = ({ className = "" }) => {
  return (
    <CentroBgRoot className={className}>
      <SejaBemVindoaContainer>
        <SejaBemVindoaAoSeuPort>
          <BlankLine>&nbsp;</BlankLine>
          <SejaBemVindoa>{`Seja bem vindo(a), ao seu portal de análise de contratos
`}</SejaBemVindoa>
        </SejaBemVindoaAoSeuPort>
        <ArrasteSeusArquivos>{`Arraste seus arquivos e pastas para cá ou use o botão "Enviar arquivo"
 para fazer upload e começar a analisar.`}</ArrasteSeusArquivos>
      </SejaBemVindoaContainer>
      <DocumentIcon alt="" src="/document.svg" />
    </CentroBgRoot>
  );
};

export default CENTROBG;
