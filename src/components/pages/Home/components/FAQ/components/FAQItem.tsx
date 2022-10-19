import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import {
  AddIcon,
  Box,
  CloseIcon,
  Divider,
  DynamicContent,
  Flex,
  Link,
  Span,
} from '../../../../../base';

export interface FAQItemProps {
  children?: ReactNode;
  answer: string;
  question: string;
  index: number;
  active: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const FAQItem: FC<FAQItemProps> = (props) => {
  const {
    active = false,
    question = '',
    answer = '',
    children,
    index = 0,
    onClose = () => {},
    onOpen = () => {},
  } = props;
  const theme = useTheme();

  if (!question || !answer) {
    return null;
  }

  const Index = (
    <Span
      xs={{
        display: 'none',
        paddingRight: 40,
        color: theme.colors.test500,
        ...theme.text.normal600,
      }}
      l={{ display: 'inline-block', ...theme.text.normal600 }}
      xl={theme.text.normal700}
    >
      0{index + 1}
    </Span>
  );

  const Icon = (
    <Box xs={{ paddingLeft: 40, position: 'relative' }}>
      <Box
        xs={{
          opacity: active ? 0 : 1,
          transition: theme.transitions.allEase,
          transform: active ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      >
        <AddIcon width={40} height={40} />
      </Box>

      <Box
        xs={{
          position: 'absolute',
          top: 0,
          opacity: active ? 1 : 0,
          transform: active ? 'rotate(0deg)' : 'rotate(-45deg)',
          transition: theme.transitions.allEase,
        }}
      >
        <CloseIcon width={40} height={40} />
      </Box>
    </Box>
  );

  const Question = (
    <Span
      xs={{
        color: theme.colors.test500,
        ...theme.text.medium500,
      }}
      m={theme.text.medium600}
      xl={theme.text.medium700}
    >
      {question}
    </Span>
  );

  const Answer = (
    <Span
      xs={{
        color: theme.colors.test400,
        ...theme.text.normal500,
      }}
      m={theme.text.normal600}
      xl={theme.text.normal700}
    >
      <DynamicContent components={{ Span, Link, Box }} jsx={answer} />

      <Box xs={{ width: 24, height: 24 }} l={{ width: 40, height: 40 }} />
    </Span>
  );

  return (
    <Box>
      <Divider color={theme.colors.test500} />

      <Flex
        onClick={() => (active ? onClose() : onOpen())}
        xs={{
          paddingBottom: 24,
          paddingTop: 24,
          transition: theme.transitions.allEase,
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          ':hover': {
            opacity: 0.6,
          },
        }}
        l={{
          paddingBottom: 40,
          paddingTop: 40,
        }}
      >
        {/* index */}
        {Index}

        <Box xs={{ flex: 1 }}>
          {/* question */}
          {Question}
        </Box>

        {/* icon */}
        {Icon}
      </Flex>

      {/* answer */}
      <Flex
        xs={{
          height: active ? 'auto' : '0px',
          display: 'block',
          overflow: 'hidden',
          paddingRight: 20,
        }}
      >
        <Box xs={{ opacity: 0 }}>{Index}</Box>

        {Answer}
      </Flex>

      {children}
    </Box>
  );
};
