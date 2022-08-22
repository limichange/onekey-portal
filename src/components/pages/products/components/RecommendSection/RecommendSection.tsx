import { FC, ReactNode } from 'react';

import { Box, Container, I18n, OnlyDisplay, Section } from '../../../../base';
import { SectionTitle } from '../../../../common';

import { ProductCard } from './ProductCard';
import { RecommendSectionSwiper } from './RecommendSectionSwiper';
import { useRecommendSectionData } from './useRecommendSectionData';

export interface RecommendSectionProps {
  children?: ReactNode;
  include: string[];
}

export const RecommendSection: FC<RecommendSectionProps> = (props) => {
  const { children, include } = props;
  const recommendSectionData = useRecommendSectionData();

  const data = recommendSectionData.items.filter((item) =>
    include.find((name) =>
      item.name.toLowerCase().includes(name.toLocaleLowerCase()),
    ),
  );

  return (
    <Section
      xs={{ paddingBottom: 20, paddingTop: 60 }}
      m={{ paddingBottom: 40, paddingTop: 80 }}
    >
      <Box css={{ textAlign: 'center' }}>
        <SectionTitle>
          <I18n name="title__you_might_also_like" />
        </SectionTitle>
      </Box>

      <Container>
        <Box xs={{ paddingTop: 40 }} m={{ paddingTop: 80 }}>
          <OnlyDisplay xs s>
            <RecommendSectionSwiper data={data} />
          </OnlyDisplay>

          <OnlyDisplay m l xl xxl>
            <Box
              m={{
                display: 'flex',
                gap: 25,
                justifyContent: 'space-between',
                alignItems: 'stretch',
              }}
            >
              {data.map((item) => (
                <Box xs={{ flex: 1 }} key={item.name}>
                  <ProductCard data={item} />
                </Box>
              ))}
            </Box>
          </OnlyDisplay>
        </Box>
      </Container>

      {children}
    </Section>
  );
};
