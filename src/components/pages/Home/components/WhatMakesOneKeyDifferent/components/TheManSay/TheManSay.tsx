import { FC, ReactNode } from 'react';

import { Box, Flex } from '../../../../../../base';

import { LeftBorderIcon } from './LeftBorderIcon';
import { RightBorderIcon } from './RightBorderIcon';
import { TextContent } from './TextContent';
import { UserInfo } from './UserInfo';

export interface TheManSayProps {
  children?: ReactNode;
}

export const TheManSay: FC<TheManSayProps> = (props) => {
  const { children } = props;

  return (
    <Flex xs={{ flexDirection: 'column' }}>
      <LeftBorderIcon />

      <Box
        xs={{ paddingLeft: 24, paddingRight: 24 }}
        m={{ paddingLeft: 80, paddingRight: 80 }}
        l={{ paddingLeft: 100, paddingRight: 100 }}
        xl={{ paddingLeft: 120, paddingRight: 120 }}
      >
        <TextContent />

        <Box xs={{ paddingTop: 28 }}>
          <UserInfo />
        </Box>

        {children}
      </Box>

      <Box
        xs={{
          marginLeft: 'auto ',
        }}
      >
        <RightBorderIcon />
      </Box>
    </Flex>
  );
};
