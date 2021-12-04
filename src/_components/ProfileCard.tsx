import React from 'react';
import Image from 'next/image';
import { HorizonalList, NavLink, NavItem } from '@src/_components/Nav';
import { icon } from '@src/config/image-size';
import json from '@public/index.json';
import image from '@public/hrkmtsmt.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 16px;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  overflow: hidden;
  aspect-ratio: 1/1;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Desc = styled.div`
  line-height: 24px;
`;

const Social = styled.div``;

const Icon = styled.i``;

export const ProfileCard = () => {
  return (
    <Wrapper>
      <User>
        <ImageContainer>
          <Image alt={''} src={image} width={icon.width} height={icon.height} />
        </ImageContainer>
        <Name>{json.name}</Name>
      </User>
      <Desc>{json.intro}</Desc>
      <Social>
        <HorizonalList>
          {json.socialMedia.map((data) => (
            <NavLink key={data.id} href={data.link}>
              <Icon className={`i-${data.id}`} />
            </NavLink>
          ))}
        </HorizonalList>
      </Social>
    </Wrapper>
  );
};
