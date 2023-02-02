import React from 'react';
import { Triangle } from 'react-loader-spinner';

export const Loader: React.FC = () => {
  return (
    <Triangle
      height="280"
      width="280"
      color="purple"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        'display': 'flex',
        'justifyContent': 'center',
      }}
      wrapperClass=''
      visible={true}
    />
  );
};
