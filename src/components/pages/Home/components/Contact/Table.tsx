import { FC, ReactNode } from 'react';

import { useExternalUrls } from '../../../../../data';
import { Box } from '../../../../base';

import { Item } from './Item';

export interface TableProps {
  children?: ReactNode;
}

export const Table: FC<TableProps> = (props) => {
  const { children } = props;
  const externalUrls = useExternalUrls();

  const items = [
    externalUrls.helpCenter,
    externalUrls.customerService,
    externalUrls.discord,
    externalUrls.github,
  ];

  return (
    <Box
      xs={{
        paddingTop: 64,
        display: 'grid',
        gridTemplateColumns: `repeat(1, 1fr);`,
        gridGap: 24,
      }}
      m={{
        gridTemplateColumns: `repeat(2, 1fr);`,
      }}
      l={{
        gridTemplateColumns: `repeat(4, 1fr);`,
      }}
    >
      {items.map((item) => (
        <Item {...item} key={item.name} />
      ))}

      {children}
    </Box>
  );
};
