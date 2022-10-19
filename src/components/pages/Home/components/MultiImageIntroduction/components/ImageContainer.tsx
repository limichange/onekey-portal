import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, OnlyDisplay } from '../../../../../base';
import { FadeIn } from '../../../../../base/FadeIn';

export interface ImageContainerProps {
  mobile: ReactNode;
  desktop: ReactNode;
  onClick: () => void;
}

export const ImageContainer: FC<ImageContainerProps> = (props) => {
  const { onClick, mobile, desktop } = props;
  const theme = useTheme();
  const boxShadow = '0px 24px 48px rgba(0, 0, 0, 0.08)';

  return (
    <Box
      onClick={onClick}
      xs={{
        overflow: 'hidden',
        borderRadius: theme.borderRadius.xxxl,
        transition: theme.transitions.allEase,
        transform: 'translate3d(0, 0, 0)',
        cursor: 'pointer',
        ':hover': {
          transform: 'translate3d(0, -8px, 0)',
          boxShadow,
        },
        ':active': {
          transform: 'translate3d(0, -4px, 0)',
        },
      }}
      l={{
        ':hover': {
          transform: 'translate3d(0, -16px, 0)',
          boxShadow,
        },
        ':active': {
          transform: 'translate3d(0, -8px, 0)',
        },
      }}
    >
      <FadeIn>
        <OnlyDisplay xs s m>
          {mobile}
        </OnlyDisplay>
        <OnlyDisplay l xl xxl>
          {desktop}
        </OnlyDisplay>
      </FadeIn>
    </Box>
  );
};
