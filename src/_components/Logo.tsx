import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Anchor = styled.a`
  width: 40px;
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  path {
    fill: var(--primary-color);
  }
`;

const SVG = () => {
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <path
        d={
          "M27.077,21.978c-0.15,0.666 -0.487,2.308 -1.211,3.175c-0.532,0.639 -1.149,1.004 -1.973,1.115c-0.183,0.025 -0.925,0.037 -1.222,0.037c-0.238,0 -0.431,-0.192 -0.431,-0.43c0,-1.066 0,-3.74 0,-3.74c0,-3.261 -1.934,-5.318 -4.927,-5.318c-1.289,-0 -2.426,0.374 -3.209,1.158c-0.369,0.369 -0.452,0.544 -0.632,0.852c-0.086,0.148 -0.405,0.631 -0.412,0.635c-0.037,0.032 -0.092,0.036 -0.133,0.01c-0.042,-0.027 -0.062,-0.077 -0.049,-0.125c0.091,-0.387 0.413,-1.822 0.413,-3.72l0,-2.482c0,-1.406 -0.756,-2.162 -2.162,-2.162l-0.34,-0c-1.405,-0 -2.162,0.756 -2.162,2.162l-0,15.117c-0,1.405 0.757,2.161 2.162,2.161l0.34,0c1.406,0 2.162,-0.756 2.162,-2.161l0,-4.741c0,-1.426 0.925,-2.386 2.292,-2.386c1.289,-0 1.992,0.742 1.992,2.175l0,4.952c0,1.405 0.757,2.161 2.162,2.161l3.375,0c3.208,0 4.842,-0.871 6.41,-2.614c1.037,-1.152 1.568,-2.911 1.881,-4.133c0.373,-1.455 0.597,-2.976 0.597,-4.55c0,-9.686 -7.864,-17.549 -17.55,-17.549c-5.703,-0 -10.775,2.725 -13.981,6.945c-0.769,1.012 -0.572,2.459 0.441,3.228c1.012,0.769 2.459,0.572 3.228,-0.441c2.365,-3.112 6.105,-5.125 10.312,-5.125c7.143,0 12.942,5.799 12.942,12.942c0,0.98 -0.109,1.935 -0.315,2.852Z"
        }
      />
    </svg>
  );
};

export const Logo: React.VFC = () => {
  return (
    <Link href={"/"} passHref>
      <Anchor>
        <SVG />
      </Anchor>
    </Link>
  );
};
