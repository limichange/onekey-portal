import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../../base';
import { SectionTitle } from '../SectionTitle';

export interface NormalCenterPageHeaderProps {
  children?: ReactNode;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string | ReactNode;
}

export const NormalCenterPageHeader: FC<NormalCenterPageHeaderProps> = (
  props,
) => {
  const { children, title, subtitle, description } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{ textAlign: 'center', paddingTop: '26vh', paddingBottom: '16vh' }}
    >
      <SectionTitle>
        {title}

        {subtitle && <br />}

        <Span xs={{ color: theme.colors.brandAlt400 }}>{subtitle}</Span>
      </SectionTitle>

      <br />
      <br />

      <Box xs={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Span
          css={{ color: theme.colors.test400 }}
          xs={theme.text.normal200}
          m={theme.text.normal300}
          l={theme.text.normal400}
        >
          {description}
        </Span>
      </Box>

      {children}
    </Box>
  );
};
