import React, { useEffect, useRef } from 'react';
import { threeRenderer } from '@src/webGL/renderer';
import { Section } from '../Section';

const Component: React.FC = () => {
  const ref = useRef();

  useEffect(() => {
    (async () => {
      threeRenderer(ref);
    })();
  }, []);

  return (
    <Section>
      <div ref={ref} />
    </Section>
  );
};

export const Hero = React.memo(Component);
