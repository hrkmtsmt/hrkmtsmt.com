import React, { useEffect, useRef } from 'react';
import { threeRenderer } from '@src/webGL/renderer';

const Component: React.FC = () => {
  const ref = useRef();

  useEffect(() => {
    (async () => {
      threeRenderer(ref);
    })();
  }, []);

  return <div ref={ref} />;
};

export const Hero = React.memo(Component);
