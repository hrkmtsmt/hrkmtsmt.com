import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@src/styles/style";

export const Grid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
  ${mediaQuery.tablet} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  ${mediaQuery.mobile} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridFull = styled.div`
  grid-column: span 12;
  width: 100%;
  ${mediaQuery.tablet} {
    grid-column: span 8;
  }
  ${mediaQuery.mobile} {
    grid-column: span 4;
  }
`;

export const GridLarge = styled.div`
  grid-column: span 6;
  width: 100%;
  ${mediaQuery.tablet} {
    grid-column: span 8;
  }
  ${mediaQuery.mobile} {
    grid-column: span 4;
  }
`;

export const GridMedium = styled.div`
  grid-column: span 4;
  width: 100%;
`;

export const GridSmall = styled.div`
  grid-column: span 3;
  width: 100%;
  ${mediaQuery.desktop} {
    grid-column: span 4;
  }
  ${mediaQuery.mobile} {
    grid-column: span 2;
  }
`;

export const GridExtraSmall = styled.div`
  grid-column: span 2;
  width: 100%;
  ${mediaQuery.desktop} {
    grid-column: span 4;
  }
  ${mediaQuery.mobile} {
    grid-column: span 2;
  }
`;
