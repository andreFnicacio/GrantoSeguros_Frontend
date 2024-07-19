import { FunctionComponent } from "react";
import styled from "styled-components";

export type CriarConta2Type = {
  className?: string;
};

const EntreEmUma = styled.p`
  margin: 0;
`;
const Da = styled.span``;
const GrantoSeguros = styled.b`
  font-family: var(--font-mulish);
  color: var(--color-darkblue-100);
`;
const EntreEmUmaContainer = styled.span`
  width: 100%;
`;
const EntreEmUmaContainer1 = styled.div`
  position: absolute;
  top: 0.419rem;
  left: calc(50% - 255.8px);
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  width: 32.063rem;
  height: 2.938rem;
`;
const CriarContaRoot = styled.div`
  position: absolute;
  top: 28.45rem;
  left: 30.563rem;
  border-radius: var(--br-9xs);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-mediumaquamarine);
  box-sizing: border-box;
  width: 21.813rem;
  height: 3.875rem;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-mulish);
`;

const CriarConta2: FunctionComponent<CriarConta2Type> = ({
  className = "",
}) => {
  return (
    <CriarContaRoot className={className}>
      <EntreEmUmaContainer1>
        <EntreEmUmaContainer>
          <EntreEmUma>Entre em uma conta existente</EntreEmUma>
          <EntreEmUma>
            <Da>{`da `}</Da>
            <GrantoSeguros>Granto Seguros</GrantoSeguros>
          </EntreEmUma>
        </EntreEmUmaContainer>
      </EntreEmUmaContainer1>
    </CriarContaRoot>
  );
};

export default CriarConta2;
