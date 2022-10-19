import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Container, Section } from '../../../../base';

import { Table } from './Table';
import { Title } from './Title';

export interface ContactProps {
  children?: ReactNode;
}

export const Contact: FC<ContactProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Section
      xs={{
        background: theme.colors.brandAlt200,
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <Container>
        <Title />

        <Table />

        {children}
      </Container>
    </Section>
  );
};
