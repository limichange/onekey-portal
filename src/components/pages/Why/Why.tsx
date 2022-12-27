import { FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Box, I18n, Main, SEO } from '../../base';
import {
  Hardware,
  Navigation,
  PageFooter,
  SectionContainer,
  StartSection,
} from '../../common';

import { ComparedToOtherHardwareWallets } from './components/ComparedToOtherHardwareWallets';
import { FixedTableHeader } from './components/ComparedToOtherHardwareWallets/FixedTableHeader';
import { HeroVideo } from './components/HeroVideo';
import { MainTitle } from './components/MainTitle';
import { ScrollStory } from './components/ScrollStory';
import { StartingFromFreeList } from './components/StartingFromFreeList';
import { StartingFromFreeTable } from './components/StartingFromFreeTable';

export interface WhyProps {
  children?: ReactNode;
}

export const Why: FC<WhyProps> = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <SEO
        title={oneLine(t('title__why_use_onekey'))}
        description={t('title__why_use_onekey_desc')}
      />

      <Navigation>
        <FixedTableHeader />
      </Navigation>

      <Main xs={{ paddingTop: '12vh' }}>
        <MainTitle />

        <HeroVideo />

        <SectionContainer>
          <StartingFromFreeList />

          <Box xs={{ paddingTop: 40 }}>
            <StartingFromFreeTable />
          </Box>
        </SectionContainer>

        <ScrollStory />

        <ComparedToOtherHardwareWallets />

        <Hardware />

        <StartSection
          title={
            <I18n
              name="title__try_our_app_wallet_first_its_free"
              alwaysMultiLine
            />
          }
        />

        {children}
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </Box>
  );
};
