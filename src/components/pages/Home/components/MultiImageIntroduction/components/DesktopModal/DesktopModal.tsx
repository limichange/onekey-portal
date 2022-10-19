import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import { useLockBodyScroll } from '../../../../../../../hooks';
import { Box } from '../../../../../../base';

import { DesktopModalContent } from './DesktopModalContent';

export interface DesktopModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export const DesktopModal: FC<DesktopModalProps> = (props) => {
  const { onClose, children } = props;

  useLockBodyScroll();

  return (
    <Box
      xs={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 4000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          background: 'linear-gradient(0deg, #F0F1F2, #F0F1F2), #EEEEEE',
          opacity: 0.7,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 4001,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          zIndex: 4011,
        }}
      >
        <DesktopModalContent onClose={onClose} />
      </motion.div>

      {children}
    </Box>
  );
};
