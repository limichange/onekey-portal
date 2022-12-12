import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Th } from '../../../../../base';
import { useComparedToOtherHardwareWallets } from '../useComparedToOtherHardwareWallets';

export interface DesktopTableHeaderProps {
  children?: ReactNode;
}

export const DesktopTableHeader: FC<DesktopTableHeaderProps> = (props) => {
  const { children } = props;
  const { head } = useComparedToOtherHardwareWallets();
  const grayBorderStyle = `1px solid #CFCFCF`;
  const greenBorderStyle = `1px solid #49BB57`;
  const theme = useTheme();

  return (
    <thead>
      <Box
        as="tr"
        xs={{
          ...theme.text.medium400,
          height: 56,
          lineHeight: '56px',
          position: 'relative',
          th: {
            paddingLeft: 18,
            textAlign: 'left',
          },
        }}
        m={{
          ...theme.text.medium600,
          height: 76,
          lineHeight: '76px',
          th: {
            paddingLeft: 0,
            textAlign: 'center',
          },
        }}
      >
        <Th
          xs={{ display: 'none', borderBottom: grayBorderStyle }}
          m={{ display: 'table-cell', width: '25%' }}
        />
        <Th
          xs={{
            borderBottom: greenBorderStyle,
            width: '33.3333%',
            background: theme.colors.brandAlt300,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          }}
          m={{ width: '25%' }}
        >
          <Box xs={{}}>{head.OneKey}</Box>
        </Th>
        <Th
          xs={{
            borderBottom: grayBorderStyle,
            width: '33.3333%',
          }}
          m={{ width: '25%' }}
        >
          {head.Trezor}
        </Th>
        <Th
          xs={{
            borderBottom: grayBorderStyle,
            width: '33.3333%',
          }}
          m={{ width: '25%' }}
        >
          {head.Ledger}
        </Th>
      </Box>
      {children}
    </thead>
  );
};
