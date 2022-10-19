import { FC, ReactNode } from 'react';

import { useKeyPress } from '../../../../../../hooks';
import { Box, OnlyDisplay } from '../../../../../base';

import { DesktopModal } from './DesktopModal';
import { MobileModal } from './MobileModal';

export interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, onClose } = props;

  useKeyPress('Escape', () => {
    onClose();
  });

  return (
    <Box>
      <OnlyDisplay m l xl xxl>
        <DesktopModal onClose={onClose} />
      </OnlyDisplay>

      <OnlyDisplay xs s>
        <MobileModal onClose={onClose} />
      </OnlyDisplay>

      {children}
    </Box>
  );
};
