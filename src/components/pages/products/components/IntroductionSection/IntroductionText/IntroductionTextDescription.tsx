import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../../../../base';

export interface IntroductionTextDescriptionProps {
  children?: ReactNode;
}

export const IntroductionTextDescription: FC<
  IntroductionTextDescriptionProps
> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      css={{ display: 'block' }}
      xs={theme.text.normal400}
      l={{ maxWidth: 620 }}
      xl={theme.text.normal500}
      xxl={theme.text.normal600}
    >
      {children}
    </Span>
  );
};
