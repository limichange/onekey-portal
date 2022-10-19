import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, I18n, Span } from '../../../../../../base';

import { Avatar } from './Avatar';

export interface UserInfoProps {
  children?: ReactNode;
}

export const UserInfo: FC<UserInfoProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar />

      <Span
        xs={{
          color: theme.colors.test500,
          ...theme.text.medium300,
        }}
        l={theme.text.medium400}
        xxl={theme.text.medium500}
      >
        <I18n name="content__xi_wang" />
      </Span>

      <Span
        xs={{
          color: theme.colors.test300,
          ...theme.text.normal300,
        }}
        l={theme.text.normal400}
        xxl={theme.text.normal500}
      >
        <I18n name="content__partner_bixin_ventures" />
      </Span>
      {children}
    </Flex>
  );
};
