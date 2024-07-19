import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type BotoIniciarSesso1Type = {
  className?: string;
};

const Login = styled.div`
  position: absolute;
  top: 0.669rem;
  left: calc(50% - 136.65px);
  font-size: var(--font-size-lg);
  line-height: 1.5rem;
  font-family: var(--font-mulish);
  color: var(--color-darkblue-100);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.063rem;
  height: 1.5rem;
`;
const BotoIniciarSessoRoot = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-mediumaquamarine);
  position: absolute;
  top: 18.763rem;
  left: 30.581rem;
  border-radius: var(--br-9xs);
  width: 21.794rem;
  height: 2.775rem;
`;

const BotoIniciarSesso1: FunctionComponent<BotoIniciarSesso1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(() => {
    navigate("/backoffice");
  }, [navigate]);

  return (
    <BotoIniciarSessoRoot
      onClick={onBotoIniciarSessoClick}
      className={className}
    >
      <Login>Login</Login>
    </BotoIniciarSessoRoot>
  );
};

export default BotoIniciarSesso1;
