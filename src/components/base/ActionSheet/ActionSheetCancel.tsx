import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../Box';
import { I18n } from '../I18n';

export interface ActionSheetCancelProps {
  children?: ReactNode;
}

export const ActionSheetCancel: FC<ActionSheetCancelProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Span
      xs={{
        ...theme.text.normal500,
        textAlign: 'center',
        padding: 8,
        transition: theme.transitions.allEaseInOut,
        borderRadius: 8,
        cursor: 'pointer',
        width: '100%',
        display: 'block',
        ':hover': {
          background: theme.colors.test100,
        },
      }}
    >
      <I18n name="action__cancel" />

      {children}
    </Span>
  );
};
