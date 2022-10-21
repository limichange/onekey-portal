import { FC, ReactNode, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { useOnClickOutside } from '../../../hooks';
import { Box } from '../Box';

import { LogoDownloadModal } from './LogoDownloadModal';

export interface LogoDownloadModalAreaProps {
  children?: ReactNode;
}

export const LogoDownloadModalArea: FC<LogoDownloadModalAreaProps> = (
  props,
) => {
  const { children } = props;
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside([ref], () => {
    setIsActive(false);
  });

  return (
    <Box
      xs={{ position: 'relative' }}
      onContextMenu={(e) => {
        setIsActive(true);
        e.preventDefault();
      }}
    >
      {children}

      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LogoDownloadModal onClose={() => setIsActive(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
