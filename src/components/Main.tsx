import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent from "./FrameComponent";

export type MainType = {
  className?: string;
};

const NavigationDivider = styled.div`
  height: 2.544rem;
  width: 0.138rem;
  position: absolute;
  margin: 0 !important;
  top: 7.25rem;
  right: -0.094rem;
  border-radius: var(--br-12xs);
  background-color: var(--color-darkblue-100);
  z-index: 1;
`;
const Layout = styled.div`
  height: 2.544rem;
  width: 0.138rem;
  position: absolute;
  margin: 0 !important;
  top: 11.563rem;
  right: -0.094rem;
  border-radius: var(--br-12xs);
  background-color: var(--color-darkblue-100);
  z-index: 1;
`;
const MainRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-mulish);
`;

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <MainRoot className={className}>
      <NavigationDivider />
      <Layout />
      <FrameComponent />
    </MainRoot>
  );
};

export default Main;
