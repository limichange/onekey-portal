import { FC, ReactNode } from 'react';

import { useGPUTier } from '../../../../hooks';
import { Box, Main, OnlyDisplay, SEO } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { CompatibilitySection } from '../components';
import { NavigationCart } from '../components/Cart';
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

import { useOneKeyMiniData } from './useOneKeyMiniData';

export interface OneKeyMiniProps {
  children?: ReactNode;
}

export const OneKeyMini: FC<OneKeyMiniProps> = (props) => {
  const { children } = props;
  const oneKeyMiniData = useOneKeyMiniData();
  const { isEnergySavingMode } = useGPUTier();

  return (
    <Box>
      <SEO
        title={oneKeyMiniData.title}
        description={oneKeyMiniData.productInformation.description}
        image="https://www.onekey.so/og/og-onekey-mini.jpg"
      />

      <Navigation>
        <NavigationCart {...oneKeyMiniData.productInformation} />
      </Navigation>

      <Main>
        <ProductInformation {...oneKeyMiniData.productInformation} />

        <IntroductionSection>
          <IntroductionSectionTitle
            name={oneKeyMiniData.productInformation.name}
          />

          <OnlyDisplay xs s>
            <IntroductionContainer>
              <ImageIntroduction items={oneKeyMiniData.imageIntroduction} />
            </IntroductionContainer>
          </OnlyDisplay>

          <OnlyDisplay m l xl xxl>
            {!isEnergySavingMode && (
              <FullscreenScrollAnimation
                backgroundColor="#F0F1F2"
                items={oneKeyMiniData.imageIntroduction}
              />
            )}
            {isEnergySavingMode && (
              <IntroductionContainer>
                <ImageIntroduction items={oneKeyMiniData.imageIntroduction} />
              </IntroductionContainer>
            )}
          </OnlyDisplay>
        </IntroductionSection>

        <CompatibilitySection />

        <FeatureSection {...oneKeyMiniData.feature} />

        <MultiChainSupportSection />

        <TechnicalSpecificationsSection
          {...oneKeyMiniData.technicalSpecifications}
        />

        <RecommendSection include={['touch', 'classic', 'lite']} />

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />

      {/* <MobileCart {...oneKeyMiniData.productInformation} /> */}

      {children}
    </Box>
  );
};
