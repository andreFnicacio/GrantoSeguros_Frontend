import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type CriarContaType = {
  className?: string;
};

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
  height: 1.938rem;
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
const CriarContaRoot = styled.div`
  position: absolute;
  top: 28.719rem;
  left: 30.581rem;
  border-radius: var(--br-9xs);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-mediumaquamarine);
  box-sizing: border-box;
  width: 21.794rem;
  height: 2.775rem;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-mulish);
`;

const CriarConta: FunctionComponent<CriarContaType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCriarContaContainerClick = useCallback(() => {
    navigate("/criar-conta");
  }, [navigate]);

  return (
    <CriarContaRoot onClick={onCriarContaContainerClick} className={className}>
      <CrieUmaContaContainer1>
        <CrieUmaContaContainer>
          <CrieUmaConta>{`Crie uma conta na `}</CrieUmaConta>
          <GrantoSeguros>Granto Seguros</GrantoSeguros>
        </CrieUmaContaContainer>
      </CrieUmaContaContainer1>
      <UtilizandoAPlataforma>{`Utilizando a plataforma pela primeira vez? `}</UtilizandoAPlataforma>
    </CriarContaRoot>
  );
};

export default CriarConta;
