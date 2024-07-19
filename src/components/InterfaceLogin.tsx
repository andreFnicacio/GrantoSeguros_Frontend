import { FunctionComponent } from "react";
import styled from "styled-components";

export type InterfaceLoginType = {
  className?: string;
};

const InterfaceLoginChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  width: 27.619rem;
  height: 34.781rem;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.006rem;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 21.794rem;
  height: 2.294rem;
`;
const EMail = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: inline-block;
  width: 10.381rem;
  height: 1.231rem;
`;
const Emailexemplocom = styled.div`
  position: absolute;
  top: 1.894rem;
  left: 1.238rem;
  color: var(--color-darkgray);
  display: inline-block;
  width: 10.35rem;
  height: 1.231rem;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 8.888rem;
  left: 2.394rem;
  width: 21.794rem;
  height: 3.3rem;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0.994rem;
  left: 0.019rem;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 21.794rem;
  height: 2.294rem;
`;
const EsqueceuASenha = styled.div`
  position: absolute;
  top: 3.313rem;
  left: 15rem;
  display: inline-block;
  width: 10.381rem;
  height: 1.231rem;
`;
const Div = styled.div`
  position: absolute;
  top: 1.881rem;
  left: 1.25rem;
  color: var(--color-darkgray);
  display: inline-block;
  width: 10.35rem;
  height: 1.231rem;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 12.825rem;
  left: 2.394rem;
  width: 25.381rem;
  height: 4.544rem;
`;
const InterfaceLoginRoot = styled.div`
  position: absolute;
  top: 0rem;
  left: 28.169rem;
  width: 27.781rem;
  height: 34.781rem;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const InterfaceLogin: FunctionComponent<InterfaceLoginType> = ({
  className = "",
}) => {
  return (
    <InterfaceLoginRoot className={className}>
      <InterfaceLoginChild />
      <RectangleParent>
        <GroupChild />
        <EMail>E-mail</EMail>
        <Emailexemplocom>email@exemplo.com</Emailexemplocom>
      </RectangleParent>
      <RectangleGroup>
        <GroupItem />
        <EMail>Senha</EMail>
        <EsqueceuASenha>Esqueceu a senha?</EsqueceuASenha>
        <Div>************</Div>
      </RectangleGroup>
    </InterfaceLoginRoot>
  );
};

export default InterfaceLogin;
