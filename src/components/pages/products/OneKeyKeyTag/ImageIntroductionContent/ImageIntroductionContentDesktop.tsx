import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, MultilineText, Span } from '../../../../base';
import { ImageIntroductionItemContainer } from '../../components/IntroductionSection/ImageIntroduction/ImageIntroductionItemContainer';
import { IntroductionText } from '../../components/IntroductionSection/IntroductionText';
import { IntroductionTextDescription } from '../../components/IntroductionSection/IntroductionText/IntroductionTextDescription';
import { IntroductionTextPosition } from '../../components/IntroductionSection/IntroductionText/IntroductionTextPosition';
import { IntroductionTextTitle } from '../../components/IntroductionSection/IntroductionText/IntroductionTextTitle';

import { useImagesIntroduction } from './useImagesIntroduction';

export interface ImageIntroductionContentDesktopProps {
  children?: ReactNode;
}

export const ImageIntroductionContentDesktop: FC<
  ImageIntroductionContentDesktopProps
> = (props) => {
  const { children } = props;
  const imagesIntroduction = useImagesIntroduction();
  const theme = useTheme();

  return (
    <Box xs={{ display: 'grid', gridGap: 20, color: theme.colors.test500 }}>
      <Box xs={{ position: 'relative' }}>
        <ImageIntroductionItemContainer>
          {imagesIntroduction.object.item1.item1DesktopImage}
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
          {imagesIntroduction.object.item2.item2DesktopImage}

          <IntroductionTextPosition>
            <IntroductionTextTitle>
              {imagesIntroduction.object.item2.item2title}
            </IntroductionTextTitle>

            <IntroductionTextDescription>
              <Box xs={{ display: 'grid', gridGap: 8 }}>
                {imagesIntroduction.object.item2.item2desc
                  .split('\\n')
                  .map((item) => (
                    <Span key={item}>{item}</Span>
                  ))}
              </Box>
            </IntroductionTextDescription>
          </IntroductionTextPosition>
        </ImageIntroductionItemContainer>
      </Box>

      <Box
        xs={{
          display: 'grid',
          gridGap: 20,
          gridTemplateColumns: `repeat(2, 1fr)`,
        }}
      >
        <Box xs={{ position: 'relative' }}>
          <ImageIntroductionItemContainer>
            {imagesIntroduction.object.item3.item3DesktopImage}

            <Box xs={{ background: '#f1f1f2' }}>
              <IntroductionTextPosition>
                <Box
                  xs={theme.text.medium700}
                  l={theme.text.medium800}
                  xxl={theme.text.medium1100}
                >
                  <MultilineText
                    text={imagesIntroduction.object.item3.item3title}
                  />
                </Box>

                <Box xs={{ paddingBottom: '5vw' }}>
                  <IntroductionTextDescription>
                    <MultilineText
                      text={imagesIntroduction.object.item3.item3desc}
                    />
                  </IntroductionTextDescription>
                </Box>
              </IntroductionTextPosition>
            </Box>
          </ImageIntroductionItemContainer>
        </Box>

        <Box xs={{ position: 'relative' }}>
          <ImageIntroductionItemContainer>
            {imagesIntroduction.object.item4.item4DesktopImage}

            <Box xs={{ background: '#ebebeb' }}>
              <IntroductionTextPosition>
                <Box xs={{ display: 'grid', gridGap: 12 }} l={{ gridGap: 16 }}>
                  {imagesIntroduction.object.item4.item4title
                    .split('\\n')
                    .map((item) => (
                      <Box
                        key={item}
                        xs={theme.text.medium700}
                        l={theme.text.medium800}
                        xxl={theme.text.medium1100}
                      >
                        {item}
                      </Box>
                    ))}
                </Box>
              </IntroductionTextPosition>
            </Box>
          </ImageIntroductionItemContainer>
        </Box>
      </Box>

      {children}
    </Box>
  );
};
