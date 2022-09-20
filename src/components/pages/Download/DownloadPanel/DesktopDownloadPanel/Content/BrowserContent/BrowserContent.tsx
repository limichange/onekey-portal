import React, { FC } from 'react';

import { Box } from '../../../../../../base';
import { Flex } from '../../../../../../base/Flex';
import { DownloadButton } from '../../../DownloadButton';
import { Title } from '../../../Title';
import { useOneKeyDownloadData } from '../../../useOneKeyDownloadData';

export interface BrowserContentProps {
  children?: React.ReactNode;
}

export const BrowserContent: FC<BrowserContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { chrome, edge, firefox, brave },
    types: { browser },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: chrome.name,
      icon: chrome.icon,
      url: chrome.url,
      infos: [],
    },
    {
      text: firefox.name,
      icon: firefox.icon,
      url: firefox.url,
      infos: [],
    },
    {
      text: edge.name,
      icon: edge.icon,
      url: edge.url,
      infos: [],
    },
    {
      text: brave.name,
      icon: brave.icon,
      url: brave.url,
      infos: [],
    },
  ];

  return (
    <>
      <Flex
        xs={{
          flex: 1,
          gap: 32,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Title name={browser.pageTitle} />

        <Box>
          {buttons.map((item) => (
            <Box
              key={item.text}
              xs={{
                marginRight: 12,
                marginBottom: 8,
                width: 220,
                display: 'inline-block',
              }}
            >
              <DownloadButton
                icon={item.icon}
                text={item.text}
                url={item.url}
                information={item.infos}
              />
            </Box>
          ))}
        </Box>
      </Flex>

      {children}
    </>
  );
};
