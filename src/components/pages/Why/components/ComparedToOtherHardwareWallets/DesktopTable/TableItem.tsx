import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, CheckIcon, FailIcon } from '../../../../../base';
import { SupportItem } from '../useComparedToOtherHardwareWallets';

export interface TableItemProps {
  children?: ReactNode;
  support: SupportItem;
}

export const TableItem: FC<TableItemProps> = (props) => {
  const { children, support } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 6,
        ...theme.text.medium100,
      }}
      m={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <Box xs={{ position: 'relative' }}>
        {typeof support.content === 'boolean' && (
          <Box xs={{ width: 24, height: 24 }} m={{ width: 32, height: 32 }}>
            {support.content ? (
              <CheckIcon color={theme.colors.test500} />
            ) : (
              <FailIcon color="#F01F11" />
            )}
          </Box>
        )}

        {typeof support.content === 'string' && (
          <Box xs={support.style?.xs} m={support.style?.m}>
            {support.content}
          </Box>
        )}

        <Box
          xs={{
            position: 'absolute',
            right: -12,
            top: 0,
            ...theme.text.normal100,
          }}
        >
          {support.message}
        </Box>
      </Box>

      {children}
    </Box>
  );
};
