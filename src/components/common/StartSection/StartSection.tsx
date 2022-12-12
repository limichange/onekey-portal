import { FC, ReactNode, useMemo } from 'react';

import { useTheme } from '@emotion/react';

import { FloatCursor, useFloatCursor } from '..';
import { DownloadTypes, useDownloadData } from '../../../data/useDownloadData';
import { useMediaQuery, useRuntimeDetect } from '../../../hooks';
import { Box, Container, Flex, I18n, Img, Section, Span } from '../../base';

import arrowSvg from './images/arrow.svg';
import { StartItem } from './StartItem';

export interface StartSectionProps {
  title?: string | ReactNode;
}

export const StartSection: FC<StartSectionProps> = (props) => {
  const {
    title = (
      <I18n name="title__start_using_onekey_wallet_today" alwaysMultiLine />
    ),
  } = props;
  const theme = useTheme();
  const media = useMediaQuery();
  const downloadData = useDownloadData();
  const { isIOS, isAndroid } = useRuntimeDetect();
  const { floatCursorProps, setStatus, ref } = useFloatCursor();

  const items = useMemo(() => {
    const innerItems = [];

    if (media.medium) {
      innerItems.push(downloadData.desktop);
      innerItems.push(downloadData.mobile);
      innerItems.push(downloadData.browserExtension);
    } else {
      // mobile
      if (isIOS) {
        innerItems.push(downloadData.ios);
      } else if (isAndroid) {
        innerItems.push(downloadData.android);
      } else {
        innerItems.push(downloadData.mobile);
      }

      innerItems.push(downloadData.otherPlatforms);
    }

    return innerItems;
  }, [
    downloadData.android,
    downloadData.browserExtension,
    downloadData.desktop,
    downloadData.ios,
    downloadData.mobile,
    downloadData.otherPlatforms,
    isAndroid,
    isIOS,
    media.medium,
  ]);

  return (
    <div ref={ref}>
      <Section css={{ position: 'relative' }}>
        <Container>
          <Flex
            xs={{
              paddingTop: 72,
              paddingBottom: 72,
              flexDirection: 'column',
              gap: 117,
            }}
            xl={{
              paddingTop: 164,
              paddingBottom: 164,
            }}
          >
            <Box
              xs={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
              m={{
                display: 'block',
              }}
            >
              <Span
                css={{ color: theme.colors.test500 }}
                xs={{ ...theme.text.medium900 }}
                xl={{ ...theme.text.medium1200 }}
              >
                {title}
              </Span>

              <Img
                alt="arrow"
                src={arrowSvg}
                css={{
                  marginBottom: -10,
                  maxWidth: 106 / 2,
                  maxHeight: 100 / 2,
                }}
                m={{
                  marginLeft: 16,
                }}
              />
            </Box>
            <Flex
              onMouseEnter={() => setStatus('active')}
              onMouseLeave={() => setStatus('hidden')}
              css={{ gap: 23 }}
            >
              {items.map((item) => {
                const iconType = item.image as DownloadTypes;
                return <StartItem key={item.type} {...item} image={iconType} />;
              })}
            </Flex>
          </Flex>
        </Container>

        <FloatCursor {...floatCursorProps} />
      </Section>
    </div>
  );
};
