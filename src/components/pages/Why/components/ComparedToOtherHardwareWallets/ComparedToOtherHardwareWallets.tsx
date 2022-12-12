import { FC, ReactNode, useRef } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { Box, Container, I18n } from '../../../../base';
import { SectionContainer, SectionTitle } from '../../../../common';

import { DesktopTable } from './DesktopTable';
import { useFixedTableHeader } from './FixedTableHeader/useFixedTableHeader';
import { TableFooter } from './TableFooter';

export interface ComparedToOtherHardwareWalletsProps {
  children?: ReactNode;
}

export const ComparedToOtherHardwareWallets: FC<
  ComparedToOtherHardwareWalletsProps
> = (props) => {
  const { children } = props;
  const { setVisible } = useFixedTableHeader();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end 33vh'],
  });

  useTransform(scrollYProgress, (value) => {
    if (value >= 1) {
      setVisible(false);
    } else if (value < 1 && value > 0) {
      setVisible(true);
    } else if (value === 0) {
      setVisible(false);
    }
  });

  return (
    <SectionContainer>
      <Container>
        <Box
          xs={{
            textAlign: 'center',
            maxWidth: 840,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <SectionTitle>
            <I18n name="title__onekey_compared_to_other_hardware_wallets" />
          </SectionTitle>
        </Box>

        <div ref={containerRef}>
          <Box
            xs={{ paddingTop: 24, paddingBottom: 20 }}
            m={{ paddingTop: 56 }}
          >
            <DesktopTable />
          </Box>
        </div>

        <TableFooter />

        {children}
      </Container>
    </SectionContainer>
  );
};
