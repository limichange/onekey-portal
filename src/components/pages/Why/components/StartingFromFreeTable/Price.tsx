import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface PriceProps {
  children?: ReactNode;
}

export const Price: FC<PriceProps> = (props) => {
  const { children } = props;

  return (
    <Box xs={{ padding: 6 }} m={{ paddingLeft: 12, paddingTop: 8 }}>
      {children}
    </Box>
  );
};
