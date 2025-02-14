import { FC, ReactNode } from 'react';

import { Box, Main, SEO } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import { CompatibilitySection } from '../components';
import { NavigationCart } from '../components/Cart';
import { FeatureSection } from '../components/FeatureSection';
import { IntroductionSection } from '../components/IntroductionSection';
import { ImageIntroduction } from '../components/IntroductionSection/ImageIntroduction';
import { IntroductionContainer } from '../components/IntroductionSection/IntroductionContainer';
import { IntroductionSectionTitle } from '../components/IntroductionSection/IntroductionSectionTitle';
import { ProductInformation } from '../components/ProductInformation';
import { RecommendSection } from '../components/RecommendSection';

import { useOneKeyLiteData } from './useOneKeyLiteData';

export interface OneKeyLiteProps {
  children?: ReactNode;
}

export const OneKeyLite: FC<OneKeyLiteProps> = (props) => {
  const { children } = props;
  const OneKeyLiteData = useOneKeyLiteData();

  return (
    <Box>
      <SEO
        title={OneKeyLiteData.title}
        description={OneKeyLiteData.productInformationData.description}
        image="https://www.onekey.so/og/og-onekey-lite.jpg"
      />

      <Navigation>
        <NavigationCart {...OneKeyLiteData.productInformationData} />
      </Navigation>

      <Main>
        <ProductInformation {...OneKeyLiteData.productInformationData} />

        <IntroductionSection>
          <IntroductionSectionTitle
            name={OneKeyLiteData.productInformationData.name}
          />

          <IntroductionContainer>
            <ImageIntroduction items={OneKeyLiteData.imageIntroduction} />
          </IntroductionContainer>
        </IntroductionSection>

        <CompatibilitySection />

        <FeatureSection {...OneKeyLiteData.feature} />

        <Box xs={{ paddingTop: 40 }}>
          <RecommendSection include={['mini', 'touch', 'classic']} />
        </Box>

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />

      {/* <MobileCart {...OneKeyLiteData.productInformationData} /> */}

      {children}
    </Box>
  );
};
