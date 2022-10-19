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
        width: 160,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Img xs={{}} src={src} alt={name} />
      {children}
    </Box>
  );
};
