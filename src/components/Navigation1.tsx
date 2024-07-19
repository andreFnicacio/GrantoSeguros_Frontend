import { FunctionComponent } from "react";
import styled from "styled-components";

export type Navigation1Type = {
  className?: string;
};

const SaberMais = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: inherit;
  white-space: nowrap;
`;
const MenuItems = styled.div`
  width: 10.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
const MenuItems1 = styled.div`
  width: 11.563rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-xl) 0rem 0rem;
  box-sizing: border-box;
  margin-left: -0.938rem;
`;
const Cadastro = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: inherit;
`;
const MenuItems2 = styled.div`
  width: 11.063rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-mini) 0rem 0rem;
  box-sizing: border-box;
  margin-left: -0.938rem;
`;
const FazerLogin = styled.a`
  text-decoration: none;
  width: 7.375rem;
  position: relative;
  line-height: 1.438rem;
  color: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  z-index: 4;
  margin-left: -0.938rem;
`;
const MenuTopo = styled.nav`
  margin: 0;
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: var(--br-3xs);
  background-color: var(--color-darkblue-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-3xl-5) var(--padding-89xl) var(--padding-xl-6);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
  @media screen and (max-width: 825px) {
    padding-left: var(--padding-35xl);
    padding-right: var(--padding-35xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 675px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const NavigationRoot = styled.header`
  width: 78.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    width: 0.394rem;
  }
`;

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  return (
    <NavigationRoot className={className}>
      <MenuTopo>
        <MenuItems>
          <SaberMais>Saber Mais</SaberMais>
        </MenuItems>
        <MenuItems1>
          <SaberMais>Fale conosco</SaberMais>
        </MenuItems1>
        <MenuItems2>
          <Cadastro>Cadastro</Cadastro>
        </MenuItems2>
        <FazerLogin>Fazer Login</FazerLogin>
      </MenuTopo>
    </NavigationRoot>
  );
};

export default Navigation1;
