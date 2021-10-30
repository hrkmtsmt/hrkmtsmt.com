import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@src/styles/style";
import { color } from "@src/styles/style";

export const List: React.VFC = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${mediaQuery.tablet} {
    gap: 24px;
  }
  ${mediaQuery.mobile} {
    gap: 16px;
  }
`;

export const Item: React.VFC = styled.li`
  color: var(${color.fontColor});
  &:hover {
    color: var(${color.primaryColor});
  }
`;
