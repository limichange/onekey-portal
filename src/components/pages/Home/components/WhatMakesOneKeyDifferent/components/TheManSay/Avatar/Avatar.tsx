import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box } from '../../../../../../../base';

export interface AvatarProps {
  children?: ReactNode;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{
        display: 'inline-block',
        width: 32,
        height: 32,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <StaticImage
        style={{ display: 'block', width: '100%', height: '100%' }}
        src="./the-man.jpg"
        alt="sss"
      />

      {children}
    </Box>
  );
};
