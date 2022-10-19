import { FC, ReactNode } from 'react';

import { Flex } from '../../base';

import { Arrow } from './Arrow';

export interface PrevAndNextProps {
  children?: ReactNode;
  allowPrev: boolean;
  allowNext: boolean;
  prevClick: () => void;
  nextClick: () => void;
}

export const PrevAndNext: FC<PrevAndNextProps> = (props) => {
  const { children, allowPrev, allowNext, prevClick, nextClick } = props;

  return (
    <Flex>
      <Arrow
        disabled={!allowPrev}
        onClick={prevClick}
        direction="left"
        xs={{
          width: 64,
        }}
      />
      <Arrow
        disabled={!allowNext}
        xs={{
          marginLeft: 24,
          width: 128,
          justifyContent: 'flex-end',
        }}
        onClick={nextClick}
        direction="right"
      />

      {children}
    </Flex>
  );
};
