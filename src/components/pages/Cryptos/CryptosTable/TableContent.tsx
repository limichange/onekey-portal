import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Img, Th } from '../../../base';
import { StatusIcon } from '../../../common/StatusIcon';

import { useCryptosTable } from './useCryptosTable';

export interface TableContentProps {
  children?: ReactNode;
}

export const TableContent: FC<TableContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const cryptosTable = useCryptosTable();

  const borderStyle = `1px solid ${theme.colors.test200}`;

  return (
    <Box
      xs={{
        borderTop: borderStyle,
        borderBottom: borderStyle,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
        textAlign: 'left',
      }}
      m={{
        borderLeft: borderStyle,
        borderRight: borderStyle,
        borderRadius: 24,
      }}
    >
      <table
        css={{
          width: '100%',
          borderSpacing: 0,
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr
            css={{
              ...theme.text.medium200,
              height: 76,
              lineHeight: '76px',
              position: 'relative',
              borderBottom: borderStyle,
            }}
          >
            <th>{cryptosTable.thead.coins}</th>
            <Th m={{ width: '15%' }}>{cryptosTable.thead.app}</Th>
            <Th m={{ width: '15%' }}>{cryptosTable.thead.desktop}</Th>
            <Th m={{ width: '15%' }}>{cryptosTable.thead.extension}</Th>
            <Th m={{ width: '15%' }}>{cryptosTable.thead.mini}</Th>
            <Th m={{ width: '15%' }}>{cryptosTable.thead.touch}</Th>
          </tr>
        </thead>

        <tbody
          css={{
            ':before': {
              content: '""',
              display: 'block',
              height: '12px',
            },
          }}
        >
          {cryptosTable.data.map((item) => (
            <tr css={{ height: 80 }} key={item.name}>
              <td>
                <Flex xs={{ alignItems: 'center' }}>
                  <Img
                    xs={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      overflow: 'hidden',
                    }}
                    src={item.icon}
                  />

                  <Box xs={{ paddingLeft: 12 }}>
                    <Box xs={theme.text.medium400}>{item.name}</Box>
                    {/* todo: maybe crypto name */}
                    {/* <Box
                      xs={{
                        ...theme.text.medium100,
                        color: theme.colors.test300,
                      }}
                    >
                      {item.name}
                    </Box> */}
                  </Box>
                </Flex>
              </td>

              <td>
                <StatusIcon isSupported={item.support.app} />
              </td>
              <td>
                <StatusIcon isSupported={item.support.desktop} />
              </td>
              <td>
                <StatusIcon isSupported={item.support.extension} />
              </td>
              <td>
                <StatusIcon isSupported={item.support.mini} />
              </td>
              <td>
                <StatusIcon isSupported={item.support.touch} />
              </td>

              {/* todo: the chain link */}
              {/* <td css={{ textAlign: 'right' }}>
                <Link to={item.name}>
                  <Flex
                    xs={{
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      color: theme.colors.brandAlt400,
                      ...theme.text.medium300,
                    }}
                  >
                    <Span>Link</Span>
                    <ArrowRightIcon
                      color={theme.colors.brandAlt400}
                      width={24}
                      height={24}
                    />
                  </Flex>
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {children}
    </Box>
  );
};
