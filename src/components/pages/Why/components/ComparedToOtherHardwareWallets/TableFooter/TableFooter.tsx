import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n, Li, Ol } from '../../../../../base';

export interface TableFooterProps {
  children?: ReactNode;
}

export const TableFooter: FC<TableFooterProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <div>
      <Ol
        xs={{
          textTransform: 'full-width',
          ...theme.text.normal400,
        }}
      >
        <Li>
          <I18n name="content__onekey_classic_touch_and_pro_series_of_bluetooth_communication_college" />
        </Li>
        <Li>
          <I18n name="content__support_optical_communications_with_biometric_onekey_pro_series" />
        </Li>
      </Ol>

      {children}
    </div>
  );
};
