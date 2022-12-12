import { FC, ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { Box, Container } from '../../../../../base';
import { DesktopTableHeader } from '../DesktopTable/DesktopTableHeader';

import { useFixedTableHeader } from './useFixedTableHeader';

export interface FixedTableHeaderProps {
  children?: ReactNode;
}

export const FixedTableHeader: FC<FixedTableHeaderProps> = (props) => {
  const { children } = props;
  const { visible } = useFixedTableHeader();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box xs={{ background: 'white', paddingTop: 12 }}>
            <Container>
              <table
                css={{
                  width: '100%',
                  borderSpacing: 0,
                  borderCollapse: 'collapse',
                }}
              >
                <DesktopTableHeader />
              </table>
            </Container>

            {children}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
