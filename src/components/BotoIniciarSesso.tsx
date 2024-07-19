import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type BotoIniciarSessoType = {
  className?: string;
};

const IniciarSesso = styled.div`
  position: absolute;
  top: 1.313rem;
  left: calc(50% - 133.5px);
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.063rem;
  height: 1.5rem;
`;
const BotoIniciarSessoRoot = styled.div`
  position: absolute;
  top: 37rem;
  left: 6.375rem;
  border-radius: var(--br-9xs);
  background-color: var(--color-mediumaquamarine);
  width: 20.063rem;
  height: 4.188rem;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-7xl);
  color: var(--color-darkslategray);
  font-family: var(--font-mulish);
`;

const BotoIniciarSesso: FunctionComponent<BotoIniciarSessoType> = ({
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
      <IniciarSesso>Iniciar Sessão</IniciarSesso>
    </BotoIniciarSessoRoot>
  );
};

export default BotoIniciarSesso;
