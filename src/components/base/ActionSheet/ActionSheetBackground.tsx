import { FC, ReactNode } from 'react';

import { Box } from '../Box';

export interface ActionSheetBackgroundProps {
  children?: ReactNode;
}

export const ActionSheetBackground: FC<ActionSheetBackgroundProps> = (
  props,
) => {
  const { children } = props;

  return (
    <Box
      style={{
        background: 'linear-gradient(0deg, #F0F1F2, #F0F1F2), #EEEEEE',
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4001,
      }}
    >
      {children}
    </Box>
  );
};
