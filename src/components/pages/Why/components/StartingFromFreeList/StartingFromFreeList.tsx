import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, CheckIcon, Container, H1, I18n, Li, Ul } from '../../../../base';

export interface StartingFromFreeListProps {
  children?: ReactNode;
}

export const StartingFromFreeList: FC<StartingFromFreeListProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Container>
      <Box
        xs={{
          display: 'grid',
          gap: 24,
        }}
        l={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <H1
          xs={{
            color: theme.colors.test500,
            ...theme.text.medium700,
          }}
          m={theme.text.medium800}
          l={theme.text.medium900}
        >
          <I18n
            name="title__starting_from_free_buy_if_you_need_it"
            alwaysMultiLine
          />
        </H1>

        <Ul
          xs={{
            margin: 0,
            listStyle: 'none',
            display: 'grid',
            gap: 16,
            ...theme.text.normal400,
          }}
          s={{ gap: 24, ...theme.text.normal500 }}
          l={{ gap: 40, ...theme.text.normal600 }}
        >
          {[
            'title__starting_from_free_buy_if_you_need_it_desc_1',
            'title__starting_from_free_buy_if_you_need_it_desc_2',
            'title__starting_from_free_buy_if_you_need_it_desc_3',
            'title__starting_from_free_buy_if_you_need_it_desc_4',
          ].map((item) => (
            <Li key={item} xs={{ display: 'flex' }}>
              <Box xs={{ paddingRight: 16, paddingTop: 4 }}>
                <CheckIcon
                  color={theme.colors.brandAlt400}
                  width={24}
                  height={24}
                />
              </Box>

              <I18n name={item} />
            </Li>
          ))}
        </Ul>
        {children}
      </Box>
    </Container>
  );
};
