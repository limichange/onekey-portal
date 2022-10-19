import { FC, ReactNode } from 'react';

import { Container, Section } from '../../../../base';
import { FadeIn } from '../../../../base/FadeIn';

import { WhatOurUsersSayContent } from './components/WhatOurUsersSayContent';
import { WhatOurUsersSayTitle } from './components/WhatOurUsersSayTitle';

export interface WhatOurUsersSayProps {
  children?: ReactNode;
}

export const WhatOurUsersSay: FC<WhatOurUsersSayProps> = (props) => {
  const { children } = props;

  return (
    <Section>
      <Container xs={{ paddingTop: 160, paddingBottom: 160 }}>
        <WhatOurUsersSayTitle />

        <FadeIn>
          <WhatOurUsersSayContent />
        </FadeIn>

        {children}
      </Container>
    </Section>
  );
};
