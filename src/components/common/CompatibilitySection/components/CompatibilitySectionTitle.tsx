import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { SectionTitle } from '../..';
import { Box, DynamicContent, I18n, Span } from '../../../base';

import { TutorialsLink } from './TutorialsLink';

export interface CompatibilitySectionTitleProps {
  children?: ReactNode;
}

export const CompatibilitySectionTitle: FC<CompatibilitySectionTitleProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      xs={{
        display: 'grid',
        paddingBottom: 48,
        gridGap: 24,
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      m={{ maxWidth: 760 }}
      xl={{ maxWidth: 1100 }}
    >
      <SectionTitle>
        <I18n
          name="title__perfectly_compatible_with_the_following_third_party_software"
          alwaysMultiLine
        />
      </SectionTitle>

      <Span
        xs={{
          textAlign: 'center',
          color: theme.colors.test400,
          ...theme.text.normal400,
        }}
        m={theme.text.normal500}
      >
        <DynamicContent
          jsx={t(
            'title__perfectly_compatible_with_the_following_third_party_software_desc',
          )}
          components={{
            TutorialsLink,
          }}
        />
      </Span>

      {children}
    </Box>
  );
};
