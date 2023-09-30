import React from "react";
import { css } from '@emotion/react';
import styled from "@emotion/styled";

function SidebarItem() {
  const StyledSideBarItem = styled.li<{ isSubItem?: boolean }>`
    height: 2.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: Product sans;
    letter-spacing: 0.7px;
    padding: 15px 30px 15px 25px;
    cursor: pointer;
    border-left: 5px solid transparent;

    ${({ isSubItem }) =>
      !isSubItem &&
      css`
        &.active,
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &.active {
          border-left: 5px solid var(--accent);
        }
      `}

    ${({ isSubItem }) =>
      isSubItem &&
      css`
        &.active {
          background: none;
          font-weight: 800;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      `}

  &:not(.active) {
      opacity: 1;
    }
  `;
  const Icon = styled.div`
  width: 30px;
  text-align: center;
`;

  return <StyledSideBarItem>SidebarItem</StyledSideBarItem>;
}

export default SidebarItem;
