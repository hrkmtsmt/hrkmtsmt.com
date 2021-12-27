import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Props } from '@src/_components/types';
import { landscape } from '@src/config/image-size';

const Wrapper = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;
  flex-direction: column;
  background: var(--base-color);
  border-radius: 24px;
  overflow: hidden;
  transition: ease-in-out 0.2s;
  z-index: 1;
  &:hover {
    filter: var(--shadow-color-hover);
  }
  &:active {
    transform: scale(0.98);
    transition: ease-in-out 0.1s;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  > * {
    margin: 0 0 16px;

    &:last-child {
      margin: 0;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 0 0 66.66666%;
  padding: 0 0 calc(100% / 3 * 2);
  background: var(--primary-color-light);
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  height: 48px;
  color: var(--font-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Category = styled.div`
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
`;

const Button = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 20px;
  line-height: 40px;
  width: max-content;
  font-weight: 700;
  border-radius: 40px;
  text-align: center;
  text-decoration: none;
  background: none;
  color: var(--primary-color);
  background: var(--primary-color-light);
  overflow: hidden;
  z-index: 1;
  transition: ease-in-out 0.2s;

  &:hover {
    color: var(--base-color);
    background: var(--primary-color);
    transition: ease-in-out 0.2s;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 40px;
    background: var(--primary-color);
    left: 0;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transition: ease-in-out 0.2s;
    border-radius: 40px;
    z-index: -1;
  }
  &:hover::before {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    transition: ease-in-out 0.2s;
  }
`;

export const PostCard: React.VFC<Props> = (props) => {
  return (
    <Link href={props.href} passHref>
      <Wrapper>
        {props.src !== undefined && (
          <ImageWrapper>
            <Image
              src={props.src}
              alt={props.alt}
              width={landscape.width}
              height={landscape.height}
              unoptimized={true}
            />
          </ImageWrapper>
        )}
        <Content>
          <Category>{props.cat}</Category>
          <Title>{props.title}</Title>
          <Button>{props.cta}</Button>
        </Content>
      </Wrapper>
    </Link>
  );
};
