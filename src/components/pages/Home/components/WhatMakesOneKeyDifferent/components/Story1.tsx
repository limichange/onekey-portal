import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { DynamicContent } from '../../../../../base';
import { BoldHighlight } from '../../../../../common';

import { StoryContainer } from './StoryContainer';

export interface Story1Props {
  children?: ReactNode;
}

export const Story1: FC<Story1Props> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <StoryContainer>
      <DynamicContent
        jsx={t('content__what_makes_onekey_different_1')}
        components={{ Highlight: BoldHighlight }}
      />
      {children}
    </StoryContainer>
  );
};
