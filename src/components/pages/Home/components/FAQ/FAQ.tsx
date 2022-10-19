import { FC, ReactNode } from 'react';

import { Container, Section } from '../../../../base';

import { Content } from './components/Content';
import { Title } from './components/Title';

export interface FAQProps {
  children?: ReactNode;
}

export const FAQ: FC<FAQProps> = (props) => {
  const { children } = props;

  return (
    <Section
      xs={{
        paddingTop: 60,
        paddingBottom: 120,
      }}
    >
      <Container>
        <Title />

        <Content />

        {children}
      </Container>
    </Section>
  );
};
