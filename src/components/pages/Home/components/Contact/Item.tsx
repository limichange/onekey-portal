import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  ArrowRightIcon,
  Box,
  Divider,
  Flex,
  Link,
  Span,
} from '../../../../base';

export interface ItemProps {
  children?: ReactNode;
  name: string;
  url: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { children, name, url, description } = props;
  const theme = useTheme();

  return (
    <Link
      xs={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        ':hover': {
          opacity: 0.6,
          transition: theme.transitions.allEase,
        },
      }}
      to={url}
    >
      <Divider />

      <Flex
        xs={{
          alignItems: 'center',
          justifyContent: 'space-between',
          color: theme.colors.test500,
          ...theme.text.medium600,
        }}
      >
        <Span>{name}</Span>

        <Box className="svgIcon" xs={{ transition: theme.transitions.allEase }}>
          <ArrowRightIcon width={24} height={24} />
        </Box>
      </Flex>

      <Span
        xs={{
          color: theme.colors.test400,
          ...theme.text.normal300,
        }}
      >
        {description}
      </Span>

      {children}
    </Link>
  );
};
