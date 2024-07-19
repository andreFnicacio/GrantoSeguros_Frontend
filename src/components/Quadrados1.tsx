import { FunctionComponent } from "react";
import styled from "styled-components";

export type Quadrados1Type = {
  className?: string;
};

const PictureSuseppngwebp = styled.img`
  position: absolute;
  top: calc(50% - 24.1px);
  left: calc(50% - 122px);
  width: 3.013rem;
  height: 3.013rem;
  overflow: hidden;
  object-fit: cover;
`;
const Heading = styled.div`
  position: absolute;
  top: 1.063rem;
  left: 4.825rem;
  line-height: 1.25rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  width: 7.594rem;
  height: 1.25rem;
`;
const IntelignciaTreinadaCom = styled.span``;
const Span = styled.span`
  font-weight: 800;
`;
const Contratos = styled.span`
  font-weight: 500;
`;
const IntelignciaTreinadaComContainer = styled.span`
  width: 100%;
`;
const IntelignciaTreinadaComContainer1 = styled.div`
  position: absolute;
  top: 2.344rem;
  left: 4.825rem;
  line-height: 1rem;
  color: var(--color-white);
  display: flex;
  align-items: center;
  width: 10.888rem;
  height: 2rem;
`;
const QuadradosChild = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
  border: 1px solid var(--color-lightgray);
  box-sizing: border-box;
  width: 16.125rem;
  height: 5.125rem;
`;
const QuadradosRoot = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 292px);
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 18.25rem;
  border-radius: var(--br-9xs);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-mediumaquamarine);
  font-family: var(--font-mulish);
`;

const Quadrados1: FunctionComponent<Quadrados1Type> = ({ className = "" }) => {
  return (
    <QuadradosRoot className={className}>
      <PictureSuseppngwebp alt="" src="/picture--suseppngwebp@2x.png" />
      <Heading>Treinamento da AI</Heading>
      <IntelignciaTreinadaComContainer1>
        <IntelignciaTreinadaComContainer>
          <IntelignciaTreinadaCom>
            Inteligência Treinada com mais de +
          </IntelignciaTreinadaCom>
          <Span>100.000</Span>
          <Contratos> contratos</Contratos>
        </IntelignciaTreinadaComContainer>
      </IntelignciaTreinadaComContainer1>
      <QuadradosChild />
    </QuadradosRoot>
  );
};

export default Quadrados1;
