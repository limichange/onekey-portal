import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, I18n, Link, Span } from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

import { ContentContainer } from './ContentContainer';

export interface AndroidContentProps {
  children?: ReactNode;
}

export const AndroidContent: FC<AndroidContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const {
    platforms: { web, androidGooglePlay, androidAPK },
    types: { mobile },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: androidGooglePlay.name,
      icon: androidGooglePlay.icon,
      url: androidGooglePlay.url,
      infos: androidGooglePlay.description,
    },
    {
      text: web.name,
      icon: web.icon,
      url: web.url,
      infos: web.description,
    },
  ];

  return (
    <ContentContainer>
      <Title name={mobile.pageTitle} />

      <Flex
        xs={{ gap: 16, flexDirection: 'column-reverse' }}
        s={{ flexDirection: 'row' }}
      >
        {buttons.map((item) => (
          <Box key={item.text} s={{ maxWidth: 220 }}>
            <DownloadButton
              buttonSize="medium"
              icon={item.icon}
              text={item.text}
              url={item.url}
              information={item.infos}
              buttonMaxWidth="100%"
            />
          </Box>
        ))}
      </Flex>

      <Flex
        xs={{ justifyContent: 'center' }}
        s={{ justifyContent: 'flex-start' }}
      >
        <Link to={androidAPK.url}>
          <Span
            xs={{
              ...theme.text.normal200,
              textAlign: 'center',
              color: theme.colors.test500,
            }}
          >
            <I18n name="action__download" /> Android APK
          </Span>
        </Link>
      </Flex>

      {children}
    </ContentContainer>
  );
};
