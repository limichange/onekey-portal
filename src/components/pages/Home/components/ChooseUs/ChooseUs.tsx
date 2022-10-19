import { FC, ReactNode } from 'react';

import { Box, Container, Flex, Section } from '../../../../base';

import { BigGreenArrow, Text1 } from './components';
import { Text2 } from './components/Text2';

export interface ChooseUsProps {
  children?: ReactNode;
}

export const ChooseUs: FC<ChooseUsProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Container>
        <Box
          xs={{ paddingTop: 80 }}
          m={{ paddingLeft: 80, paddingRight: 80, paddingTop: 120 }}
        >
          <Text1 />

          <Text2 />

          <Flex xs={{ padding: 24, justifyContent: 'center' }}>
            <BigGreenArrow />
          </Flex>

          {children}
        </Box>
      </Container>
    </Section>
  );
};
