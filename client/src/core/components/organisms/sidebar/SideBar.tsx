"use client"
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";

const StyledBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(180, 54, 54, 0.1);
`;

const StyledPopoverWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
`;

const StyledPopover = styled.div<{ visible: boolean }>`
  position: absolute;
  right: 100%;
  top: 0%;
  bottom: 0;
  background-color: #1d3889;
  padding: 10px;
  transition: right 0.2s linear;
  width: 18rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

  ${({ visible }) =>
    visible &&
    css`
      right: calc(100% - 18rem);
    `}
`;

export default function SideBar() {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  return (
    <StyledPopoverWrapper>
      <StyledBg onClick={() => {setIsVisible(false)}} />
      <StyledPopover visible={isVisible}>
        <div>Hey</div>
      </StyledPopover>
    </StyledPopoverWrapper>
  );
}
