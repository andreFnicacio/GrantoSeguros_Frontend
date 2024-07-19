import { FunctionComponent } from "react";
import styled from "styled-components";
import MENULATERAL from "../components/MENULATERAL";
import CENTROBG from "../components/CENTROBG";

const BgTopoIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 173.375rem;
  height: 31.125rem;
`;
const MenuPesquisarChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 31px;
  background-color: #f7f7f7;
  width: 39rem;
  height: 3.706rem;
`;
const PesquisarPorUm = styled.div`
  position: absolute;
  top: 1.175rem;
  left: 4.438rem;
  display: inline-block;
  width: 25.85rem;
  height: 1.325rem;
`;
const MenuPesquisarItem = styled.img`
  position: absolute;
  height: 41.65%;
  width: 3.69%;
  top: 28.16%;
  right: 92.36%;
  bottom: 30.19%;
  left: 3.96%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MenuPesquisar = styled.div`
  position: absolute;
  top: 20.188rem;
  left: 43.688rem;
  width: 39rem;
  height: 3.706rem;
`;
const Topo = styled.div`
  position: absolute;
  top: -13.625rem;
  left: -11rem;
  width: 173.375rem;
  height: 31.125rem;
`;
const BackofficeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 64rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkgray);
  font-family: var(--font-inter);
`;

const BackOffice: FunctionComponent = () => {
  return (
    <BackofficeRoot>
      <Topo>
        <BgTopoIcon alt="" src="/bg-topo.svg" />
        <MenuPesquisar>
          <MenuPesquisarChild />
          <PesquisarPorUm>Pesquisar por um arquivo...</PesquisarPorUm>
          <MenuPesquisarItem alt="" src="/group-6.svg" />
        </MenuPesquisar>
      </Topo>
      <MENULATERAL />
      <CENTROBG />
    </BackofficeRoot>
  );
};

export default BackOffice;
