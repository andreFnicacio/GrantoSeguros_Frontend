import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const BgMenuLateral = styled.div`
  width: 12.875rem;
  height: 61.688rem;
  position: relative;
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-silver-100);
  box-sizing: border-box;
  display: none;
`;
const Layer2Icon = styled.img`
  width: 1.238rem;
  height: 0.663rem;
  position: relative;
`;
const LogoLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem var(--padding-5xs-1);
`;
const Logoa1Icon = styled.img`
  height: 2.031rem;
  width: 5.3rem;
  position: relative;
  object-fit: cover;
  cursor: pointer;
`;
const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg-1);
  cursor: pointer;
  z-index: 1;
`;
const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-6xs);
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 2.263rem;
  background-color: var(--color-darkblue-300);
  width: 8.875rem;
  height: 2.544rem;
  z-index: 1;
`;
const Upload = styled.div`
  position: absolute;
  top: 0.563rem;
  left: 0rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.363rem;
  height: 1.456rem;
  z-index: 2;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 2.544rem;
  position: relative;
`;
const Home = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0.563rem;
  left: 0rem;
  line-height: 1.5rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.363rem;
  height: 1.456rem;
  z-index: 2;
`;
const UploadArea = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--color-whitesmoke-200);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 0.544rem;
  left: 1.044rem;
  width: 1.088rem;
  height: 1.375rem;
  z-index: 2;
`;
const UploadAreaParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 2.263rem;
  width: 8.875rem;
  height: 2.544rem;
`;
const Content = styled.div`
  width: 12.363rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xl-3);
`;
const BgMenuLateralParentRoot = styled.div`
  width: 12.875rem;
  background-color: var(--color-whitesmoke-100);
  border: 1px solid var(--color-silver-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-8xl) var(--padding-741xl);
  gap: var(--gap-26xl-5);
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  font-family: var(--font-mulish);
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-4xl);
    padding-bottom: var(--padding-475xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-302xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-4xl);
  }
`;

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onMenuLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <BgMenuLateralParentRoot className={className}>
      <BgMenuLateral />
      <Brand>
        <MenuLogo onClick={onMenuLogoContainerClick}>
          <LogoLayer>
            <Layer2Icon loading="lazy" alt="" src="/layer-21.svg" />
          </LogoLayer>
          <Logoa1Icon
            loading="lazy"
            alt=""
            src="/logoa-11@2x.png"
            onClick={onMenuLogoContainerClick}
          />
        </MenuLogo>
      </Brand>
      <Content>
        <RectangleParent>
          <FrameChild />
          <Upload>Upload</Upload>
        </RectangleParent>
        <RectangleParent>
          <Home>Home</Home>
          <UploadAreaParent>
            <UploadArea />
            <FrameItem loading="lazy" alt="" src="/group-141.svg" />
          </UploadAreaParent>
        </RectangleParent>
      </Content>
    </BgMenuLateralParentRoot>
  );
};

export default FrameComponent;
