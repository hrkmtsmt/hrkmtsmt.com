import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portrait, landscape, loader } from '../../src/config/image-size';

type Props = {
  title?: string;
  category?: string;
  path?: string | any;
  image?: any;
  alt?: string;
};

const PostCardImage = (props: Props) => {
  return (
    <div className={'c-post-card-image'}>
      <Image
        loader={() => loader(props.image, landscape.width, 80)}
        src={props.image}
        alt={props.alt}
        width={landscape.width}
        height={landscape.height}
      />
    </div>
  );
};
export const PostCard = (props: Props) => {
  const cta = 'More';
  return (
    <Link href={props.path}>
      <a className={'c-post-card'}>
        {props.image == undefined ? undefined : (
          <PostCardImage image={props.image} />
        )}
        <div className={'c-post-card-body'}>
          <p className={'c-post-card-category'}>{props.category}</p>
          <h3 className={'c-post-card-title'}>{props.title}</h3>
          <div className={'c-post-card-button'}>{cta}</div>
        </div>
      </a>
    </Link>
  );
};

export const PostCardZoom = (props: Props) => {
  const cta = 'More';
  return (
    <Link href={props.path}>
      <a className={'c-card-zoom'}>
        <div className={'c-card-zoom-inner'}>
          <div className={'c-card-zoom-image'}></div>
          <div className={'c-card-zoom-body'}>
            <h3 className={'c-card-zoom-title'}>{props.title}</h3>
            <div className={'c-post-card-link'}>{cta}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export const PostCardVertical = (props: Props) => {
  return (
    <Link href={props.path}>
      <a className={'c-post-card-vertical'}>
        <div className={'c-post-card-vertical-image'}>
          <Image
            loader={() => loader(props.image, portrait.width, 80)}
            src={props.image}
            alt={props.alt}
            width={portrait.width}
            height={portrait.height}
          />
        </div>
      </a>
    </Link>
  );
};
