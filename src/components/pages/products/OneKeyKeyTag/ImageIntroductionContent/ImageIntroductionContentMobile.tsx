import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, MultilineText, Span } from '../../../../base';
import { ImageIntroductionItemContainer } from '../../components/IntroductionSection/ImageIntroduction/ImageIntroductionItemContainer';
import { IntroductionText } from '../../components/IntroductionSection/IntroductionText';
import { IntroductionTextDescription } from '../../components/IntroductionSection/IntroductionText/IntroductionTextDescription';
import { IntroductionTextPosition } from '../../components/IntroductionSection/IntroductionText/IntroductionTextPosition';
import { IntroductionTextTitle } from '../../components/IntroductionSection/IntroductionText/IntroductionTextTitle';

import { TextContainer } from './components/TextContainer';
import { useImagesIntroduction } from './useImagesIntroduction';

export interface ImageIntroductionContentMobileProps {
  children?: ReactNode;
}

export const ImageIntroductionContentMobile: FC<
  ImageIntroductionContentMobileProps
> = (props) => {
  const { children } = props;
  const imagesIntroduction = useImagesIntroduction();
  const theme = useTheme();

  return (
    <Box xs={{ display: 'grid', gridGap: 20, color: theme.colors.test500 }}>
      <Box xs={{ position: 'relative' }}>
        <ImageIntroductionItemContainer>
          {imagesIntroduction.object.item1.item1MobileImage}
        </ImageIntroductionItemContainer>

        <IntroductionTextPosition>
          <IntroductionText
            name={imagesIntroduction.object.item1.item1title.split('\\n')}
            description={imagesIntroduction.object.item1.item1desc}
          />
        </IntroductionTextPosition>
      </Box>

      <Box xs={{ position: 'relative' }}>
        <ImageIntroductionItemContainer>
          {imagesIntroduction.object.item2.item2MobileImage}

          <Box xs={{ background: '#f0f1f3' }}>
            <TextContainer>
              <IntroductionTextTitle>
                {imagesIntroduction.object.item2.item2title}
              </IntroductionTextTitle>

              <IntroductionTextDescription>
                <Box xs={{ display: 'grid', gridGap: 6 }}>
                  {imagesIntroduction.object.item2.item2desc
                    .split('\\n')
                    .map((item) => (
                      <Span key={item}>{item}</Span>
                    ))}
                </Box>
              </IntroductionTextDescription>
            </TextContainer>
          </Box>
        </ImageIntroductionItemContainer>
      </Box>

      <Box xs={{ position: 'relative' }}>
        <ImageIntroductionItemContainer>
          {imagesIntroduction.object.item3.item3MobileImage}

          <Box xs={{ background: '#efefef' }}>
            <TextContainer>
              <IntroductionTextTitle>
                <MultilineText
                  text={imagesIntroduction.object.item3.item3title}
                />
              </IntroductionTextTitle>

              <IntroductionTextDescription>
                <MultilineText
                  text={imagesIntroduction.object.item3.item3desc}
                />
              </IntroductionTextDescription>
            </TextContainer>
          </Box>
        </ImageIntroductionItemContainer>
      </Box>

      <Box xs={{ position: 'relative' }}>
        <ImageIntroductionItemContainer>
          {imagesIntroduction.object.item4.item4MobileImage}

          <Box xs={{ background: '#eceeef' }}>
            <TextContainer>
              <Box xs={{ display: 'grid', gridGap: 8 }}>
                {imagesIntroduction.object.item4.item4title
                  .split('\\n')
                  .map((item) => (
                    <IntroductionTextTitle key={item}>
                      {item}
                    </IntroductionTextTitle>
                  ))}
              </Box>
            </TextContainer>
          </Box>
        </ImageIntroductionItemContainer>
      </Box>

      {children}
    </Box>
  );
};
