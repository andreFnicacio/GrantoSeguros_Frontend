import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FazerLogin from "./FazerLogin";

export type GroupComponentType = {
  className?: string;
};

const ItemLinkChild = styled(Button)`
  position: absolute;
  top: -0.156rem;
  left: 8.081rem;
`;
const ItemLink = styled.div`
  position: absolute;
  height: calc(100% - 40.1px);
  width: calc(100% - 988.3px);
  top: 1.25rem;
  right: -22.606rem;
  bottom: 1.256rem;
  left: 84.375rem;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const FaleConosco = styled.div`
  position: absolute;
  top: 1.469rem;
  left: 45.606rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  width: 10.125rem;
  height: 1.25rem;
`;
const SaberMais = styled.div`
  position: absolute;
  top: 1.469rem;
  left: 36.419rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  width: 10.125rem;
  height: 1.25rem;
`;
const Cadastro = styled.div`
  position: absolute;
  top: 1.469rem;
  left: 56.231rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  width: 10.125rem;
  height: 1.25rem;
`;
const MenuTopo = styled.div`
  position: absolute;
  top: 1.344rem;
  left: 1.394rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: var(--br-3xs);
  background-color: var(--color-darkblue-100);
  width: 78.231rem;
  height: 4.131rem;
`;
const LogoGrantoIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 11.244rem;
  height: 5.863rem;
  overflow: hidden;
`;
const MenuTopoParentRoot = styled.div`
  position: absolute;
  top: 1.125rem;
  left: 5.188rem;
  width: 79.625rem;
  height: 5.863rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
`;

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <MenuTopoParentRoot className={className}>
      <MenuTopo>
        <ItemLink>
          <ItemLinkChild
            disableElevation
            color="primary"
            variant="outlined"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 173, height: 33 }}
          />
        </ItemLink>
        <FaleConosco>Fale conosco</FaleConosco>
        <SaberMais>Saber Mais</SaberMais>
        <Cadastro>Cadastro</Cadastro>
      </MenuTopo>
      <LogoGrantoIcon alt="" src="/logo-granto.svg" />
      <FazerLogin />
    </MenuTopoParentRoot>
  );
};

export default GroupComponent;
