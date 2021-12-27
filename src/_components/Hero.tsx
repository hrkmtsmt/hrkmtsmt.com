import React, { useState } from 'react';
import styled from 'styled-components';
import Ztext from 'react-ztext';
import { Button } from '@src/_components/Button';
import { Grid, GridFull } from '@src/_components/layout/Grid';
import { Props } from '@src/_components/types';

const HeroTitle = () => {
  return <span>Front End & Design</span>;
};

const HeroTitleZtext = (props: Props) => {
  return (
    <Ztext
      depth='40px'
      direction='both'
      event='pointer'
      eventRotation='30deg'
      eventDirection='default'
      fade={false}
      layers={10}
      perspective='2400px'
    >
      {props.title}
    </Ztext>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 80px 0;
`;

const Title = styled.h2`
  font-size: 80px;
  line-height: 80px;
  font-weight: 700;
  color: var(--primary-color);
  cursor: pointer;
  &:active {
    transform: scale(0.96);
    transition: ease-in-out 0.2s;
  }
`;

const BackGround = styled.div`
  position: absolute;
  top: -80px;
  left: -32px;
  width: calc(100% + 64px);
  height: calc(100% + 160px);
  padding: -100%;
  background: var(--base-color);
  z-index: -1;
`;

export const Hero = () => {
  const [isZtext, setIsZtext] = useState(true);
  return (
    <Wrapper>
      <Grid>
        <GridFull>
          <Title onClick={() => setIsZtext(!isZtext)}>
            {isZtext === true ? (
              <HeroTitle />
            ) : (
              <HeroTitleZtext title={'Hello World'} />
            )}
          </Title>
        </GridFull>
        <GridFull>
          <Button href={'https://github.com/hrkmtsmt'} cta={'View GitHub'} />
        </GridFull>
      </Grid>
      <BackGround />
    </Wrapper>
  );
};
