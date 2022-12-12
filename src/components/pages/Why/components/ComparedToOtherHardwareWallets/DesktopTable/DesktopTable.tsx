import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../../base';
import { useComparedToOtherHardwareWallets } from '../useComparedToOtherHardwareWallets';

import { DesktopTableHeader } from './DesktopTableHeader';
import { TableItem } from './TableItem';

export interface DesktopTableProps {
  children?: ReactNode;
}

export const DesktopTable: FC<DesktopTableProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { data } = useComparedToOtherHardwareWallets();

  return (
    <Box xs={{ paddingBottom: 12 }} m={{ borderRadius: 24 }}>
      <table
        css={{
          width: '100%',
          borderSpacing: 0,
          borderCollapse: 'collapse',
        }}
      >
        <DesktopTableHeader />
        <tbody>
          {data.map((item, index) => (
            <Fragment key={item.name}>
              {/* only mobile */}
              <tr css={{ position: 'relative' }}>
                <Box as="td" colSpan={3} m={{ display: 'none' }}>
                  <Box
                    xs={{
                      background: '#F0F1F2',
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 8,
                      paddingBottom: 8,
                      ...theme.text.normal200,
                    }}
                  >
                    <Box
                      xs={{
                        zIndex: 0,
                        position: 'absolute',
                        width: '33.3333%',
                        top: 0,
                        left: 0,
                        height: '100%',
                        background: `#52D963`,
                      }}
                    />

                    <Box
                      xs={{
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {item.name}
                    </Box>
                  </Box>
                </Box>
              </tr>

              <tr>
                {/* only desktop */}
                <Box
                  as="td"
                  xs={{ display: 'none', textAlign: 'center' }}
                  m={{
                    display: 'table-cell',
                    padding: 20,
                    ...theme.text.medium400,
                  }}
                  l={theme.text.medium500}
                >
                  {item.name}
                </Box>

                <td
                  css={{
                    background: theme.colors.brandAlt300,
                    overflow: 'hidden',
                    borderBottomRightRadius: data.length - 1 === index ? 24 : 0,
                    borderBottomLeftRadius: data.length - 1 === index ? 24 : 0,
                  }}
                >
                  <TableItem support={item.support.OneKey} />
                </td>
                <td>
                  <TableItem support={item.support.Trezor} />
                </td>
                <td>
                  <TableItem support={item.support.Ledger} />
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>

      {children}
    </Box>
  );
};
