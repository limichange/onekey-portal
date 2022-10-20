import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import LazyLoad from 'react-lazyload';

import {
  ArrowUpRightIcon,
  Box,
  Divider,
  Img,
  Link,
  OnlyDisplay,
  Span,
} from '../../../base';
import { CompatibilityItem } from '../useCompatibility';

import { Tutorials } from './Tutorials';

export interface CompatibilitySectionItemProps extends CompatibilityItem {
  children?: ReactNode;
}

export const CompatibilitySectionItem: FC<CompatibilitySectionItemProps> = (
  props,
) => {
  const { image, name, url, children, type, tutorials } = props;
  const theme = useTheme();

  return (
    <Link to={url}>
      <Divider color={theme.colors.test200} />

      <Box
        xs={{
          paddingTop: 24,
          paddingBottom: 24,
          display: 'grid',
          gridTemplateColumns: '64px 1fr 24px',
          gridGap: 24,
          color: theme.colors.test500,
          alignItems: 'center',
          ':hover svg': {
            color: theme.colors.brand400,
          },
        }}
        m={{
          gridTemplateColumns: '64px 1fr auto 24px',
        }}
      >
        <LazyLoad>
          <Img xs={{ width: 64, height: 64 }} src={image} />
        </LazyLoad>

        <Box>
          <OnlyDisplay xs s>
            <Box
              xs={{
                textTransform: 'uppercase',
                color: theme.colors.test300,
                ...theme.text.normal200,
              }}
            >
              {type}
            </Box>
          </OnlyDisplay>

          <Box xs={theme.text.medium500} m={theme.text.medium600}>
            {name}
          </Box>

          <Box
            xs={{
              color: theme.colors.test300,
              ...theme.text.normal200,
            }}
            m={theme.text.normal300}
            l={theme.text.normal400}
          >
            {url.replace('https://', '')}

            {tutorials && (
              <Span xs={{ paddingLeft: 6 }}>
                <Tutorials url={tutorials} />
              </Span>
            )}
          </Box>
        </Box>

        <OnlyDisplay m l xl xxl>
          <Box
            xs={{
              color: theme.colors.test300,
              textTransform: 'uppercase',
              ...theme.text.normal300,
            }}
          >
            {type}
          </Box>
        </OnlyDisplay>

        <Box xs={{ color: theme.colors.test300 }}>
          <ArrowUpRightIcon width={24} height={24} />
        </Box>

        {children}
      </Box>
    </Link>
  );
};
