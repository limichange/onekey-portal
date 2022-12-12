import { FC, ReactNode } from 'react';

import { Box } from '../../base';

export interface SectionContainerProps {
  children?: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = (props) => {
  const { children } = props;

  return (
    <Box
      xs={{ paddingTop: 40, paddingBottom: 40 }}
      m={{ paddingTop: 80, paddingBottom: 80 }}
      l={{ paddingTop: 120, paddingBottom: 120 }}
    >
      {children}
    </Box>
  );
};
