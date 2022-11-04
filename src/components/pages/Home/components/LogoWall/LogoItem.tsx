import { FC, ReactNode } from 'react';

import { Box, Img } from '../../../../base';

export interface LogoItemProps {
  children?: ReactNode;
  name: string;
  src: string;
}

export const LogoItem: FC<LogoItemProps> = (props) => {
  const { children, name, src } = props;

  return (
    <Box
      xs={{
        width: 160 * 0.8,
        height: 80 * 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      m={{
        width: 160,
        height: 80,
      }}
    >
      <Img
        xs={{
          width: '100%',
          height: '100%',
        }}
        src={src}
        alt={name}
      />
      {children}
    </Box>
  );
};
