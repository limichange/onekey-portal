import { FC, ReactNode, cloneElement } from 'react';

import { useTheme } from '@emotion/react';

import { splitMultiline } from '../../../../../../utils';
import { Box, DynamicContent } from '../../../../../base';

export interface MobileModalItemProps {
  children?: ReactNode;
  title: string;
  content: string;
  mobileModalImage: ReactNode;
}

export const MobileModalItem: FC<MobileModalItemProps> = (props) => {
  const { children, mobileModalImage, title, content } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        display: 'grid',
        gridGap: 24,
      }}
    >
      <Box>
        {cloneElement(mobileModalImage as React.ReactElement<any>, {
          style: {
            display: 'block',
            width: '100%',
          },
        })}
      </Box>

      {/* main content */}
      <Box xs={{ position: 'relative' }}>
        <Box
          xs={{
            height: 200,
            overflow: 'auto',
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 48,
          }}
        >
          <Box
            xs={{
              ...theme.text.medium500,
              paddingBottom: 24,
            }}
          >
            {title}
          </Box>

          <Box xs={theme.text.normal300}>
            <DynamicContent
              jsx={splitMultiline(content).join('<br/><br/>')}
              components={{}}
            />
          </Box>

          <Box
            xs={{
              transform: 'translate3d(0,0,0)',
              background: `linear-gradient(360deg, #FFFFFF 0%, rgba(217, 217, 217, 0) 100%)`,
              position: 'absolute',
              left: 0,
              bottom: 0,
              right: 0,
              height: 60,
              zIndex: 5000,
            }}
          />
        </Box>
      </Box>

      {children}
    </Box>
  );
};
