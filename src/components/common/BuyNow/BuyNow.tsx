import { FC, ReactNode, useState } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  ActionSheet,
  ActionSheetItem,
  Button,
  ButtonProps,
  I18n,
  Link,
  MenuItem,
  MenuItems,
  OnlyDisplay,
} from '../../base';
import { Box } from '../../base/Box';

export interface BuyNowProps {
  buttonOverride?: ButtonProps;
  children?: ReactNode;
  menuPosition?: 'top' | 'bottom';
  shops: {
    name: string;
    url: string;
  }[];
}

export const BuyNow: FC<BuyNowProps> = (props) => {
  const { children, shops, buttonOverride, menuPosition } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box
      xs={{
        width: 'fit-content',
        position: 'relative',
      }}
    >
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        variant="filled"
        {...buttonOverride}
      >
        <Box xs={{ minWidth: 100 }}>
          {children || <I18n name="action__buy_now" />}
        </Box>
      </Button>

      <OnlyDisplay m l xl xxl>
        <MenuItems
          css={menuPosition === 'bottom' ? { bottom: '110%' } : { top: '100%' }}
          onClickOutside={() => setIsMenuOpen(false)}
          isActive={isMenuOpen}
        >
          {shops.map((item) => (
            <Link to={item.url} key={item.name}>
              <MenuItem>
                <Box xs={{ paddingLeft: 0, paddingRight: 0 }}>{item.name}</Box>
              </MenuItem>
            </Link>
          ))}
        </MenuItems>
      </OnlyDisplay>

      {isMenuOpen && (
        <ActionSheet title={t('title__choose_a_store')}>
          {shops.map((item) => (
            <Link to={item.url} key={item.name}>
              <ActionSheetItem>
                <Box xs={{ paddingLeft: 0, paddingRight: 0 }}>{item.name}</Box>
              </ActionSheetItem>
            </Link>
          ))}
        </ActionSheet>
      )}
    </Box>
  );
};
