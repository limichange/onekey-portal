import { Children, FC, ReactElement, ReactNode, cloneElement } from 'react';

import { Span } from '../../../../../../base';

export interface EmojiContainerProps {
  children?: ReactNode;
}

export const EmojiContainer: FC<EmojiContainerProps> = (props) => {
  const { children } = props;
  const child = Children.only(children);

  return (
    <Span
      className="emoji-container"
      xs={{
        display: 'inline-block',
        position: 'relative',
        color: 'transparent',
        width: 48,
      }}
      l={{
        width: 72,
      }}
      xl={{
        width: 82,
      }}
      xxl={{
        width: 92,
      }}
    >
      <span>_</span>
      {cloneElement(child as ReactElement, {
        style: {
          position: 'absolute',
          left: 0,
          top: '-25%',
          width: '100%',
        },
      })}
    </Span>
  );
};
