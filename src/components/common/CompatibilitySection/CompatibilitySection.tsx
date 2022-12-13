import { FC, ReactNode, useState } from 'react';

import { Box, Button, Container, I18n, Section } from '../../base';

import { CompatibilitySectionItem } from './components/CompatibilitySectionItem';
import { CompatibilitySectionTitle } from './components/CompatibilitySectionTitle';
import { useCompatibility } from './useCompatibility';

export interface CompatibilitySectionProps {
  children?: ReactNode;
}

export const CompatibilitySection: FC<CompatibilitySectionProps> = (props) => {
  const { children } = props;
  const data = useCompatibility();
  const [isSeeMore, setIsSeeMore] = useState(false);

  return (
    <Section id="compatibility-section">
      <Container>
        <Box
          xs={{
            paddingTop: 80,
          }}
          m={{
            paddingTop: 120,
          }}
        >
          <CompatibilitySectionTitle />

          <Box
            xs={{ position: 'relative' }}
            l={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridColumnGap: 24,
            }}
          >
            {data.map((item, index) => {
              if (!isSeeMore && index >= 12) {
                return <div key={item.name} />;
              }

              return <CompatibilitySectionItem key={item.name} {...item} />;
            })}

            {!isSeeMore && (
              <Box
                xs={{
                  transform: 'translate3d(0,0,0)',
                  background: `linear-gradient(360deg, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%)`,
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  right: 0,
                  height: 160,
                  zIndex: 10,
                }}
              />
            )}
          </Box>

          <Box
            xs={{
              display: isSeeMore ? 'none' : 'flex',
              justifyContent: 'center',
            }}
          >
            <Button onClick={() => setIsSeeMore(true)} variant="outlined">
              <I18n name="action__see_more" />
            </Button>
          </Box>
        </Box>

        {children}
      </Container>
    </Section>
  );
};
