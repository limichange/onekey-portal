import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Span } from '../../../../../base';
import { MultilineText } from '../../../../../common';

import { IntroductionTextDescription } from './IntroductionTextDescription';
import { IntroductionTextTitle } from './IntroductionTextTitle';

export interface IntroductionTextProps {
  children?: ReactNode;
  name: string | string[];
  description: string | string[];
  color?: 'black' | 'difference';
}

export const IntroductionText: FC<IntroductionTextProps> = (props) => {
  const { children, name, description, color = 'difference' } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        transform: 'translateZ(0)',
        ...(color === 'difference'
          ? {
              mixBlendMode: 'difference',
              color: theme.colors.white,
            }
          : {
              color: theme.colors.test500,
            }),
      }}
    >
      <IntroductionTextTitle>
        {typeof name === 'string' && name}
        {Array.isArray(name) &&
          name.map((item) => (
            <Fragment key={item}>
              <Span key={item}>{item}</Span>
              <br />
            </Fragment>
          ))}
      </IntroductionTextTitle>

      <Box xs={{ paddingTop: 8 }} m={{ paddingTop: 20 }}>
        <IntroductionTextDescription>
          <MultilineText text={description} />
        </IntroductionTextDescription>
      </Box>

      {children}
    </Flex>
  );
};
