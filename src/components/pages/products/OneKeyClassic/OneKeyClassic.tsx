import { FC, ReactNode } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, OnlyDisplay } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import {
  FeatureSection,
  ImageIntroduction,
  ImageIntroductionItem,
  IntroductionContainer,
  IntroductionSection,
  IntroductionSectionTitle,
  MultiChainSupportSection,
  NavigationCart,
  ProductInformation,
  RecommendSection,
  TechnicalSpecificationsSection,
} from '../components';

import { useOneKeyClassicData } from './useOneKeyClassicData';

export interface OneKeyClassicProps {
  children?: ReactNode;
}

export const OneKeyClassic: FC<OneKeyClassicProps> = (props) => {
  const { children } = props;
  const data = useOneKeyClassicData();

  const {
    ultraLightItem,
    bluetoothBatterItem,
    ultraSecurityItem,
    allPlatformSupportItem,
  } = data.imagesIntroduction.object;

  return (
    <div>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>

      <Navigation>
        <NavigationCart {...data.productInformation} />
      </Navigation>

      <Main>
        <ProductInformation {...data.productInformation} />

        <IntroductionSection>
          <IntroductionSectionTitle name={data.productInformation.name} />

          {/* mobile */}
          <OnlyDisplay xs s>
            <IntroductionContainer>
              <ImageIntroduction items={data.imagesIntroduction.array} />
            </IntroductionContainer>
          </OnlyDisplay>

          {/* desktop */}
          <OnlyDisplay m l xl xxl>
            <IntroductionContainer>
              <ImageIntroductionItem {...ultraLightItem} />

              <Box xs={{ paddingTop: 40 }}>
                <ImageIntroductionItem {...bluetoothBatterItem} />
              </Box>
            </IntroductionContainer>

            <IntroductionContainer
              xs={{ display: 'flex', gap: 40, paddingTop: 40 }}
            >
              <ImageIntroductionItem {...ultraSecurityItem} />
              <ImageIntroductionItem {...allPlatformSupportItem} />
            </IntroductionContainer>
          </OnlyDisplay>
        </IntroductionSection>

        <FeatureSection {...data.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection {...data.technicalSpecifications} />

        <Box xs={{ paddingTop: 40 }}>
          <RecommendSection include={data.recommends} />
        </Box>

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />

      {children}
    </div>
  );
};
