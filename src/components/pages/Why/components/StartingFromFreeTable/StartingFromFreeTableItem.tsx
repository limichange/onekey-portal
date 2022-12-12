import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex } from '../../../../base';

export interface StartingFromFreeTableItemProps {
  children?: ReactNode;
  total: string;
}

export const StartingFromFreeTableItem: FC<StartingFromFreeTableItemProps> = (
  props,
) => {
  const { children, total } = props;
  const theme = useTheme();

  return (
    <Box xs={{ position: 'relative' }}>
      <Flex
        xs={{
          position: 'relative',
          justifyContent: 'space-between',
        }}
      >
        <Box xs={theme.text.normal600}>{total}</Box>
      </Flex>

      {children}
    </Box>
  );
};
