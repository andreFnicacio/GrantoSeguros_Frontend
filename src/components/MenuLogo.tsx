import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export type MenuLogoType = {
  className?: string;
};

const Logoa1Icon = styled.img`
  position: absolute;
  top: 0rem;
  left: 2.875rem;
  width: 6.438rem;
  height: 3.063rem;
  object-fit: cover;
  cursor: pointer;
`;
const Layer2Icon = styled.img`
  position: absolute;
  height: 32.65%;
  width: 16.11%;
  top: 45.51%;
  right: 83.89%;
  bottom: 21.84%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MenuLogoRoot = styled.div`
  position: absolute;
  top: 5.375rem;
  left: 4.563rem;
  width: 9.313rem;
  height: 3.063rem;
  cursor: pointer;
`;

const MenuLogo: FunctionComponent<MenuLogoType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <MenuLogoRoot onClick={onMenuLogoContainerClick} className={className}>
      <Logoa1Icon
        alt=""
        src="/logoa-1@2x.png"
        onClick={onMenuLogoContainerClick}
      />
      <Layer2Icon alt="" src="/layer-2.svg" />
    </MenuLogoRoot>
  );
};

export default MenuLogo;
