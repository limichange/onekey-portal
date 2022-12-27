import React from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { oneLine } from '../../../utils';
import { Container, Flex, Main, SEO } from '../../base';
import {
  Navigation,
  PageFooter,
  StayInTouch,
  TwoMediaCards,
} from '../../common';

import { DownloadPanel } from './DownloadPanel';

const Download: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={oneLine(t('title__download_onekey'))
          .replace('.', '')
          .replace('。', '')}
        description={oneLine(t('title__safely_travel_around_all_blockchain'))}
      />

      <Navigation />

      <Main>
        <DownloadPanel />

        <Container>
          <Flex
            xs={{
              flexDirection: 'column',
              paddingTop: 40,
              paddingBottom: 40,
              gap: 40,
            }}
            l={{ paddingTop: 80, paddingBottom: 80 }}
          >
            {/* <OnlyDisplay l xl xxl>
            <BridgeDownload />
          </OnlyDisplay> */}

            <TwoMediaCards />

            <StayInTouch />
          </Flex>
        </Container>
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />
    </>
  );
};

export default Download;
