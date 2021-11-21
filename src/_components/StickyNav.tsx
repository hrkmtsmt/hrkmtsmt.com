import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@src/styles/style";

export const StickyNav = styled.div`
  background: var(--base-color);
  border-radius: 24px;
  padding: 24px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  ${mediaQuery.desktop} {
    .c-sticky-nav {
      display: none;
    }
  }
`;
