import { FC, ReactNode, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Divider } from '../../../../../base';
import { useFAQ } from '../hooks/useFAQ';

import { FAQItem } from './FAQItem';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = (props) => {
  const { children } = props;
  const data = useFAQ();
  const theme = useTheme();
  const [currentActiveItem, setCurrentActiveItem] = useState(-1);

  return (
    <Box xs={{ paddingTop: 48 }}>
      {data.allQAs.map((item, index) => (
        <FAQItem
          active={currentActiveItem === index}
          onClose={() => setCurrentActiveItem(-1)}
          onOpen={() => setCurrentActiveItem(index)}
          key={item.question}
          index={index}
          {...item}
        />
      ))}

      <Divider color={theme.colors.test500} />

      {children}
    </Box>
  );
};
