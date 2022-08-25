import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { ArrowRightIcon, Box, Button, Flex, Link, Span } from '../../../base';

import { ProductShowcaseSectionDataItem } from './useProductShowcaseSectionData';

export interface ProductShowcaseSectionItemProps
  extends ProductShowcaseSectionDataItem {
  children?: ReactNode;
}

export const ProductShowcaseSectionItem: FC<ProductShowcaseSectionItemProps> = (
  props,
) => {
  const { units, children, imageNode, name, description, points, button } =
    props;
  const theme = useTheme();

  return (
    <Box>
      <Flex
        xs={{ flexDirection: 'column', gap: 20 }}
        m={{
          flexDirection: 'row-reverse',
        }}
        l={{ gap: 160 }}
      >
        <Box
          xs={{ borderRadius: 40, overflow: 'hidden' }}
          m={{ width: 400 }}
          l={{
            width: 'auto',
            flex: 1,
          }}
        >
          {imageNode}
        </Box>

        <Flex xs={{ flexDirection: 'column', gap: 16, flex: 1 }}>
          <Flex xs={{ flexDirection: 'column' }}>
            <Span
              xs={{
                ...theme.text.medium700,
                color: theme.colors.test500,
              }}
              l={theme.text.medium800}
              xl={theme.text.medium900}
            >
              {name}
            </Span>

            <Span xs={{ ...theme.text.normal400, color: theme.colors.test300 }}>
              {units}
            </Span>
          </Flex>

          <Span css={{ color: theme.colors.test400 }} xs={theme.text.normal400}>
            {description}
          </Span>

          <Flex xs={{ gap: 8, flexDirection: 'column' }}>
            {points.map((point) => (
              <Flex key={point.text}>
                <Box xs={{ color: theme.colors.brandAlt500 }}>
                  {point.iconNode}
                </Box>
                <Box
                  xs={{
                    color: theme.colors.test500,
                    paddingLeft: 16,
                    ...theme.text.medium400,
                  }}
                >
                  {point.text}
                </Box>
              </Flex>
            ))}
          </Flex>

          {button && (
            <Box>
              <Link to={button.url}>
                <Button
                  variant="outlined"
                  rightIcon={<ArrowRightIcon width={24} height={24} />}
                >
                  {button.text}
                </Button>
              </Link>
            </Box>
          )}
        </Flex>
      </Flex>

      {children}
    </Box>
  );
};
