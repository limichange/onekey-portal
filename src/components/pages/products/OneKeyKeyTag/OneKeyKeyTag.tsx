import { FC, ReactNode } from 'react';

import { Box, Main, SEO } from '../../../base';
import {
  Navigation,
  PageFooter,
  StayInTouchWidthContainerAndPadding,
} from '../../../common';
import {
  NavigationCart,
  ProductInformation,
  TechnicalSpecificationsSection,
} from '../components';
import {
  IntroductionSection,
  IntroductionSectionTitle,
} from '../components/IntroductionSection';
import { IntroductionContainer } from '../components/IntroductionSection/IntroductionContainer';
import { RecommendSection } from '../components/RecommendSection';

import { FunGameSection } from './FunGameSection';
import { ImageIntroductionContent } from './ImageIntroductionContent';
import { useOneKeyKeyTag } from './useOneKeyKeyTag';

export interface OneKeyKeyTagProps {
  children?: ReactNode;
}

export const OneKeyKeyTag: FC<OneKeyKeyTagProps> = (props) => {
  const { children } = props;
  const OneKeyKeyTagData = useOneKeyKeyTag();

  return (
    <Box>
      <SEO
        title={OneKeyKeyTagData.title}
        description={OneKeyKeyTagData.productInformation.description}
        image="https://www.onekey.so/og/og-onekey-keytag.jpg"
      />
      <Navigation>
        <NavigationCart {...OneKeyKeyTagData.productInformation} />
      </Navigation>

      <Main>
        <ProductInformation {...OneKeyKeyTagData.productInformation} />

        <IntroductionSection>
          <IntroductionSectionTitle
            name={OneKeyKeyTagData.productInformation.name}
          />

          <IntroductionContainer>
            <ImageIntroductionContent />
          </IntroductionContainer>
        </IntroductionSection>

        <FunGameSection />

        <TechnicalSpecificationsSection
          {...OneKeyKeyTagData.technicalSpecifications}
        />

        <Box xs={{ paddingTop: 40 }}>
          <RecommendSection include={['mini', 'touch', 'classic']} />
        </Box>

        <StayInTouchWidthContainerAndPadding />
      </Main>

      <PageFooter isShowEmailSubscribe={false} isShowMediaLinks />

      {/* <MobileCart {...OneKeyKeyTagData.productInformation} /> */}

      {children}
    </Box>
  );
};
