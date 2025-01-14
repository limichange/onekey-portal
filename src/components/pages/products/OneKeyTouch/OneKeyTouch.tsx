import { FC, ReactNode } from 'react';

import { useGPUTier } from '../../../../hooks';
import { Box, Main, OnlyDisplay, SEO } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { CompatibilitySection } from '../components';
import { FeatureSection } from '../components/FeatureSection';
import { FullscreenScrollAnimation } from '../components/FullscreenScrollAnimation';
import { IntroductionSection } from '../components/IntroductionSection';
import { ImageIntroduction } from '../components/IntroductionSection/ImageIntroduction';
import { IntroductionContainer } from '../components/IntroductionSection/IntroductionContainer';
import { IntroductionSectionTitle } from '../components/IntroductionSection/IntroductionSectionTitle';
import { MultiChainSupportSection } from '../components/MultiChainSupportSection';
import { ProductInformation } from '../components/ProductInformation';
import { RecommendSection } from '../components/RecommendSection';
import { TechnicalSpecificationsSection } from '../components/TechnicalSpecificationsSection';

import { useOneKeyTouchData } from './useOneKeyTouchData';

export interface OneKeyTouchProps {
  children?: ReactNode;
}

export const OneKeyTouch: FC<OneKeyTouchProps> = (props) => {
  const { children } = props;
  const onekeyTouchData = useOneKeyTouchData();
  const { isEnergySavingMode } = useGPUTier();

  return (
    <Box>
      <SEO
        title={onekeyTouchData.title}
        description={onekeyTouchData.productInformationData.description}
        image="https://www.onekey.so/og/og-onekey-touch.jpg"
      />

      <Navigation />

      <Main>
        <ProductInformation {...onekeyTouchData.productInformationData} />

        <IntroductionSection>
          <IntroductionSectionTitle
            name={onekeyTouchData.productInformationData.name}
          />

          <OnlyDisplay xs s>
            <IntroductionContainer>
              <ImageIntroduction items={onekeyTouchData.imageIntroduction} />
            </IntroductionContainer>
          </OnlyDisplay>

          <OnlyDisplay m l xl xxl>
            {!isEnergySavingMode && (
              <FullscreenScrollAnimation
                backgroundColor="#0D1013"
                items={onekeyTouchData.imageIntroduction}
              />
            )}
            {isEnergySavingMode && (
              <IntroductionContainer>
                <ImageIntroduction items={onekeyTouchData.imageIntroduction} />
              </IntroductionContainer>
            )}
          </OnlyDisplay>
        </IntroductionSection>

        <CompatibilitySection />

        <FeatureSection {...onekeyTouchData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...onekeyTouchData.technicalSpecifications}
        />

        <RecommendSection include={['mini', 'classic', 'lite']} />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />

      {children}
    </Box>
  );
};
