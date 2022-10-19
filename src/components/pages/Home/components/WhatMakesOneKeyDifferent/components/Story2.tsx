import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { splitMultiline } from '../../../../../../utils';
import { DynamicContent } from '../../../../../base';
import { BoldHighlight } from '../../../../../common';

import { StoryContainer } from './StoryContainer';

export interface Story2Props {
  children?: ReactNode;
}

export const Story2: FC<Story2Props> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  const text = splitMultiline(t('content__what_makes_onekey_different_2')).join(
    '<br /><br />',
  );

  return (
    <StoryContainer>
      <DynamicContent
        jsx={text}
        components={{
          Highlight: BoldHighlight,
        }}
      />
      {children}
    </StoryContainer>
  );
};
