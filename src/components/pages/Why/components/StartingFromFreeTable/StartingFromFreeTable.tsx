import { FC, ReactNode, useCallback } from 'react';

import { useTheme } from '@emotion/react';
import { motion, useAnimationControls } from 'framer-motion';

import { Box, I18n, useContainerMargin } from '../../../../base';

import { Price } from './Price';

export interface StartingFromFreeTableProps {
  children?: ReactNode;
}

export const StartingFromFreeTable: FC<StartingFromFreeTableProps> = (
  props,
) => {
  const { children } = props;
  const theme = useTheme();
  const controls = useAnimationControls();
  const size = useContainerMargin();

  const sequence = useCallback(async () => {
    await controls.start(
      (i: { width: number; height: number; delay: number }) => ({
        width: '55%',
        height: i.height,
        transition: {
          delay: i.delay * 0.8,
          ease: 'easeInOut',
          duration: 1 * 0.8,
        },
      }),
    );
  }, [controls]);

  return (
    <Box xs={{ paddingLeft: size, width: '100%', overflow: 'hidden' }}>
      <Box xs={{ display: 'grid', gap: 22, color: theme.colors.test500 }}>
        <Box xs={theme.text.medium400} m={theme.text.medium500}>
          <I18n name="content__the_value_of_your_crypto_assets" />
        </Box>

        <Box
          xs={{
            backgroundColor: '#F4F5F5',
            position: 'relative',
            height: '60vh',
            width: '100%',
            ...theme.text.normal300,
          }}
          s={{
            ...theme.text.normal400,
          }}
          m={{
            height: 400,
            ...theme.text.normal500,
          }}
          l={{
            height: 460,
            ...theme.text.normal600,
          }}
        >
          <Price>$1,000,000 +</Price>
          <motion.div
            style={{
              backgroundColor: '#E9EBEC',
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
            custom={{
              delay: 3,
              width: '50%',
              height: '60%',
            }}
            animate={controls}
          >
            <Price>$30,000</Price>

            <motion.div
              style={{
                backgroundColor: '#DFE1E3',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
              }}
              custom={{
                delay: 2,
                width: '50%',
                height: '50%',
              }}
              animate={controls}
            >
              <Price>$10,000</Price>

              <motion.div
                style={{
                  backgroundColor: '#D5D8DA',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                }}
                custom={{
                  delay: 1,
                  width: '50%',
                  height: '50%',
                }}
                animate={controls}
              >
                <Price>$1,000</Price>

                <Box
                  xs={{
                    backgroundColor: theme.colors.brandAlt400,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '5%',
                    paddingBottom: '5%',
                  }}
                >
                  <Box
                    xs={{
                      height: 90,
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -90,
                      display: 'flex',
                      justifyContent: 'center',
                      maxWidth: 16,
                    }}
                  >
                    <Box
                      xs={{
                        width: 1,
                        height: '100%',
                        background: theme.colors.test300,
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </motion.div>
        </Box>

        <Box
          xs={{
            ...theme.text.medium400,
            paddingLeft: 10,
          }}
          m={theme.text.medium500}
          l={{ paddingLeft: 14 }}
        >
          <motion.div
            onViewportEnter={() => {
              setTimeout(() => sequence(), 500);
            }}
          />

          <I18n name="content__cost_of_a_onekey_hardware_wallet" />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

// https://codepen.io/chriscoyier/pen/xxVBqEg
