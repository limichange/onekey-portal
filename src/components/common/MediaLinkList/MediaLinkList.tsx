import { FC } from 'react';

import { useExternalUrls } from '../../../data';
import { BoxProps } from '../../base/Box';
import { Flex } from '../../base/Flex';
import { DiscordIcon, GithubIcon, TwitterIcon } from '../../base/Icon';
import { Link } from '../../base/Link';

export interface MediaLinkListProps {
  color: string;
}

export const MediaLinkList: FC<BoxProps> = (props) => {
  const { color, ...otherProps } = props;
  const externalUrls = useExternalUrls();

  return (
    <Flex
      css={{
        gap: 24,
        alignItems: 'center',
        color,
        svg: {
          ':hover': {
            opacity: 0.8,
          },
        },
      }}
      externalProps={otherProps}
    >
      <Link css={{ color }} to={externalUrls.twitter.url}>
        <TwitterIcon width={32} height={32} />
      </Link>

      <Link css={{ color }} to={externalUrls.github.url}>
        <GithubIcon width={32} height={32} />
      </Link>

      <Link css={{ color }} to={externalUrls.discord.url}>
        <DiscordIcon width={32} height={32} />
      </Link>
    </Flex>
  );
};
