import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type BotoIniciarSesso2Type = {
  className?: string;
};

const Continuar = styled.div`
  position: absolute;
  top: 0.669rem;
  left: calc(50% - 136.65px);
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.063rem;
  height: 1.5rem;
`;
const BotoIniciarSessoRoot = styled.div`
  position: absolute;
  top: 21.325rem;
  left: 30.581rem;
  border-radius: var(--br-9xs);
  background-color: var(--color-mediumaquamarine);
  width: 21.794rem;
  height: 2.775rem;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-darkblue-100);
  font-family: var(--font-mulish);
`;

const BotoIniciarSesso2: FunctionComponent<BotoIniciarSesso2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(() => {
    navigate("/pgina-login");
  }, [navigate]);

  return (
    <BotoIniciarSessoRoot
      onClick={onBotoIniciarSessoClick}
      className={className}
    >
      <Continuar>CONTINUAR</Continuar>
    </BotoIniciarSessoRoot>
  );
};

export default BotoIniciarSesso2;
