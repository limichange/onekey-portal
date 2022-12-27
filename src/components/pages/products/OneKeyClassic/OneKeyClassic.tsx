import { FC, ReactNode } from 'react';

import { Box, Main, OnlyDisplay, SEO } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import {
  CompatibilitySection,
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
      <SEO
        title={data.title}
        description={data.productInformation.description}
        image="https://www.onekey.so/og/og-onekey-classic.jpg"
      />

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

        <CompatibilitySection />

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
