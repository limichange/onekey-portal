import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Link } from '../../base';
import { Box, Span } from '../../base/Box';

import { usePageFooterData } from './usePageFooterData';

export const MenuList: FC = () => {
  const theme = useTheme();
  const { menuData } = usePageFooterData();

  return (
    <Box
      xs={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {/* level1 */}
      {menuData.map((item) => (
        <Box
          key={item.name}
          xs={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: 48,
            gap: 32,
          }}
          s={{
            width: '50%',
          }}
          l={{
            width: '25%',
            ':last-child': {
              paddingRight: 0,
            },
          }}
        >
          <Span
            css={{
              ...theme.text.medium200,
              color: theme.colors.white,
              opacity: 0.6,
              ':first-letter': {
                textTransform: 'uppercase',
              },
            }}
          >
            {item.name}
          </Span>
          <Box
            xs={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
            s={{
              gap: 16,
            }}
          >
            {/* level2 */}
            {item.list.map((childItem) => (
              <Link
                to={childItem.link || '#'}
                key={childItem.name}
                css={{
                  ...theme.text.normal200,
                  color: theme.colors.white,
                  ':first-letter': {
                    textTransform: 'uppercase',
                  },
                }}
              >
                {childItem.name}
              </Link>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
