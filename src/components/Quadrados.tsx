import { FunctionComponent } from "react";
import styled from "styled-components";

export type QuadradosType = {
  className?: string;
};

const PictureSuseppngwebp = styled.img`
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 125px);
  width: 3.013rem;
  height: 3.013rem;
  overflow: hidden;
  object-fit: cover;
`;
const Heading = styled.div`
  position: absolute;
  top: 1.063rem;
  left: 4.563rem;
  line-height: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  width: 11.25rem;
  height: 1.25rem;
`;
const TreinamentosCom = styled.span``;
const DiferentesModelos = styled.b`
  white-space: pre-wrap;
`;
const DiferentesModelos1 = styled.span`
  white-space: pre-wrap;
`;
const TreinamentosComDiferentesContainer = styled.span`
  width: 100%;
`;
const TreinamentosComDiferentesContainer1 = styled.div`
  position: absolute;
  top: 2.438rem;
  left: 4.563rem;
  line-height: 0.813rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  width: 12.813rem;
  height: 2rem;
`;
const QuadradosRoot = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 292px);
  top: 0rem;
  right: 18.25rem;
  bottom: 0rem;
  left: 0rem;
  border-radius: var(--br-9xs);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-mediumaquamarine);
  font-family: var(--font-mulish);
`;

const Quadrados: FunctionComponent<QuadradosType> = ({ className = "" }) => {
  return (
    <QuadradosRoot className={className}>
      <PictureSuseppngwebp alt="" src="/picture--suseppngwebp1@2x.png" />
      <Heading>Tipos de contratos</Heading>
      <TreinamentosComDiferentesContainer1>
        <TreinamentosComDiferentesContainer>
          <TreinamentosCom>{`Treinamentos com `}</TreinamentosCom>
          <DiferentesModelos>{`diferentes  modelos `}</DiferentesModelos>
          <DiferentesModelos1>{`de contratos.  `}</DiferentesModelos1>
        </TreinamentosComDiferentesContainer>
      </TreinamentosComDiferentesContainer1>
    </QuadradosRoot>
  );
};

export default Quadrados;
