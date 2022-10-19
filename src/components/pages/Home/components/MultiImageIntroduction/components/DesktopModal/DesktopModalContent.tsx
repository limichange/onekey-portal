import { FC, ReactNode, cloneElement } from 'react';

import { useTheme } from '@emotion/react';

import { splitMultiline } from '../../../../../../../utils';
import { Box, CloseIcon, DynamicContent } from '../../../../../../base';
import { PrevAndNext } from '../../../../../../common';
import { useMultiImageIntroduction } from '../../hooks/useMultiImageIntroduction';

export interface DesktopModalContentProps {
  children?: ReactNode;
  onClose?: () => void;
}

export const DesktopModalContent: FC<DesktopModalContentProps> = (props) => {
  const { children, onClose } = props;
  const { currentSelectedData, next, prev } = useMultiImageIntroduction();
  const theme = useTheme();

  return (
    <Box
      xs={{
        zIndex: 4002,
        maxWidth: 1312,
        background: theme.colors.test100,
        borderRadius: 16,
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: `repeat(2, 1fr);`,
      }}
    >
      {cloneElement(
        currentSelectedData.desktopModalImage as React.ReactElement<any>,
        {
          style: {
            display: 'block',
            maxHeight: '90vh',
            width: 'auto',
          },
        },
      )}

      <Box
        xs={{
          color: theme.colors.test500,
          position: 'relative',
        }}
      >
        {/* close */}
        <Box
          xs={{
            position: 'absolute',
            right: 32,
            top: 32,
            cursor: 'pointer',
            transition: theme.transitions.allEase,
            ':hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <CloseIcon onClick={onClose} width={40} height={40} />
        </Box>

        {/* content */}
        <Box
          xs={{
            left: 64,
            right: 32,
            top: 165,
            bottom: 165,
            position: 'absolute',
            display: 'grid',
            gridGap: 20,
            overflow: 'auto',
            gridTemplateRows: 'minmax(80px, max-content) 1fr',
          }}
          l={{ gridGap: 40 }}
        >
          <Box
            xs={theme.text.medium600}
            l={theme.text.medium700}
            xl={theme.text.medium800}
          >
            {currentSelectedData.title}
          </Box>

          <Box
            xs={theme.text.normal400}
            l={theme.text.normal500}
            xl={theme.text.normal600}
          >
            <DynamicContent
              jsx={splitMultiline(currentSelectedData.content).join(
                '<br/><br/>',
              )}
              components={{}}
            />
          </Box>
        </Box>

        {/* prev and next */}
        <Box xs={{ position: 'absolute', bottom: 32, right: 32 }}>
          <PrevAndNext allowPrev prevClick={prev} allowNext nextClick={next} />
        </Box>
      </Box>

      {children}
    </Box>
  );
};
