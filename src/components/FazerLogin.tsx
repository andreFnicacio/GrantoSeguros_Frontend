import { FunctionComponent } from "react";
import styled from "styled-components";

export type FazerLoginType = {
  className?: string;
};

const FazerLoginRoot = styled.div`
  position: absolute;
  top: 2.813rem;
  left: 69rem;
  font-size: var(--font-size-xl);
  line-height: 1.25rem;
  font-family: var(--font-mulish);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  width: 10.119rem;
  height: 1.25rem;
`;

const FazerLogin: FunctionComponent<FazerLoginType> = ({ className = "" }) => {
  return <FazerLoginRoot className={className}>Fazer Login</FazerLoginRoot>;
};

export default FazerLogin;
