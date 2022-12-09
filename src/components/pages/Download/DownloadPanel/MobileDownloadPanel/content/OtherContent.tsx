import { FC, ReactNode } from 'react';

import { Divider, Flex } from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { FAQ } from '../../FAQ';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

import { ContentContainer } from './ContentContainer';

export interface OtherContentProps {
  children?: ReactNode;
}

export const OtherContent: FC<OtherContentProps> = (props) => {
  const { children } = props;

  const {
    platforms: { macStore, win, linux },
    types: { desktop },
  } = useOneKeyDownloadData();

  const buttons = [
    {
      text: macStore.name,
      icon: macStore.icon,
      infos: macStore.description,
      url: macStore.url,
    },
    {
      text: win.name,
      icon: win.icon,
      infos: win.description,
      url: win.url,
    },
    {
      text: linux.name,
      icon: linux.icon,
      infos: linux.description,
      url: linux.url,
    },
  ];

  return (
    <ContentContainer>
      <Title name={desktop.pageTitle} />

      <Flex xs={{ gap: 16 }}>
        {buttons.map((item) => (
          <DownloadButton
            key={item.text}
            icon={item.icon}
            text={item.text}
            url={item.url}
            information={item.infos}
          />
        ))}
      </Flex>

      <Divider />

      {desktop.faq && (
        <FAQ title={desktop.faq.title} questions={desktop.faq.questions} />
      )}

      {children}
    </ContentContainer>
  );
};
