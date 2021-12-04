import React from 'react';

type Props = {
  title?: string;
  desc?: string;
  svg?: string | HTMLElement | any;
};

export const FeatureBox = (props: Props) => {
  return (
    <div className={'c-feature-box'}>
      <div
        className={'c-feature-box-image'}
        dangerouslySetInnerHTML={props.svg}
      />
      <h3 className={'c-feature-box-title'}>{props.title}</h3>
      <div className={'c-feature-box-desc'}>{props.desc}</div>
    </div>
  );
};
