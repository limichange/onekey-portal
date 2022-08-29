import { FC, ReactNode, useState } from 'react';

import {
  ActionSheet,
  ActionSheetItem,
  Box,
  ChevronDownIcon,
  Flex,
  Link,
} from '../../../../../base';
import { DownloadButton } from '../../DownloadButton';
import { Title } from '../../Title';
import { useOneKeyDownloadData } from '../../useOneKeyDownloadData';

import { ContentContainer } from './ContentContainer';

export interface AndroidContentProps {
  children?: ReactNode;
}

export const AndroidContent: FC<AndroidContentProps> = (props) => {
  const { children } = props;
  const {
    platforms: { web, androidGooglePlay, androidAPK },
    types: { mobile },
  } = useOneKeyDownloadData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [androidGooglePlay, androidAPK];

  return (
    <ContentContainer>
      <Title name={mobile.pageTitle} />

      <Flex
        xs={{ gap: 16, flexDirection: 'column-reverse' }}
        s={{ flexDirection: 'row', maxWidth: 220 * 2 }}
      >
        <DownloadButton
          buttonSize="medium"
          onClick={() => {
            setIsMenuOpen(true);
          }}
          url="/download/#"
          icon={androidAPK.icon}
          rightIcon={ChevronDownIcon}
          text="Android"
          information={androidAPK.description}
          buttonMaxWidth="100%"
        />

        <DownloadButton
          buttonSize="medium"
          icon={web.icon}
          text={web.name}
          url={web.url}
          information=""
          buttonMaxWidth="100%"
        />
      </Flex>

      {isMenuOpen && (
        <ActionSheet onCancel={() => setIsMenuOpen(false)}>
          {links.map((item) => (
            <Link to={item.url} key={item.name}>
              <ActionSheetItem>
                <Box xs={{ paddingLeft: 0, paddingRight: 0 }}>{item.name}</Box>
              </ActionSheetItem>
            </Link>
          ))}
        </ActionSheet>
      )}

      {children}
    </ContentContainer>
  );
};
