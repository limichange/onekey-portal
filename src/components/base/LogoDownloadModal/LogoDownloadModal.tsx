import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Img, P } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { I18n } from '../I18n';
import { ArrowDownIcon } from '../Icon';

import LogoInline from './logo.svg';

export interface LogoDownloadModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export const LogoDownloadModal: FC<LogoDownloadModalProps> = (props) => {
  const { children, onClose } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'absolute',
        left: 0,
        top: '120%',
        background: theme.colors.white,
        display: 'grid',
        gridGap: 24,
        padding: 24,
        borderRadius: theme.borderRadius.xxxl,
        boxShadow: theme.shadow.hover,
      }}
    >
      <P
        xs={{
          textAlign: 'center',
          color: theme.colors.test300,
          ...theme.text.medium300,
        }}
      >
        <I18n name="content__want_to_download_our_logo" />
      </P>

      <Flex xs={{ width: 272, height: 48, justifyContent: 'center' }}>
        <Img xs={{ width: 156 }} src={LogoInline} />
      </Flex>

      <Button
        variant="outlined"
        leftIcon={<ArrowDownIcon width={24} height={24} />}
        onClick={() => {
          window.open('/logo/OneKey.zip');
          onClose?.();
        }}
      >
        <I18n name="action__download" />
      </Button>
      {children}
    </Box>
  );
};
