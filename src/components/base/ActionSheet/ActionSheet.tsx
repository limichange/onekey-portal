import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { createPortal } from 'react-dom';

import { isBrowser } from '../../../utils';
import { Box } from '../Box';
import { OnlyDisplay } from '../OnlyDisplay';

import { ActionSheetCancel } from './ActionSheetCancel';
import { ActionSheetDivider } from './ActionSheetDivider';

export interface ActionSheetProps {
  children?: ReactNode;
  title?: string;
  onCancel?: () => void;
}

export const ActionSheet: FC<ActionSheetProps> = (props) => {
  const { children, title, onCancel = () => {} } = props;
  const theme = useTheme();

  if (!isBrowser() || !document?.body) {
    return null;
  }

  return createPortal(
    <OnlyDisplay xs s>
      <Box
        onClick={onCancel}
        xs={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 4000,
        }}
      >
        <Box
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

        <Box
          style={{
            position: 'absolute',
            borderRadius: 16,
            left: 8,
            right: 8,
            bottom: 8,
            zIndex: 4002,
            padding: 8,
            paddingTop: 16,
            overflow: 'hidden',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {title && (
            <Box
              xs={{
                ...theme.text.normal300,
                textAlign: 'center',
                color: theme.colors.test300,
                padding: 8,
              }}
            >
              {title}
            </Box>
          )}

          {children}

          <ActionSheetDivider />

          <Box onClick={onCancel}>
            <ActionSheetCancel />
          </Box>
        </Box>
      </Box>
    </OnlyDisplay>,
    document.body,
  );
};
