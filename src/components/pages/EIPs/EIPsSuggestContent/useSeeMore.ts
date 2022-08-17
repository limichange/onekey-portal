import { useState } from 'react';

interface UseSeeMoreParams<T> {
  list: T[];
  limit?: number;
}

export function useSeeMore<T>(params: UseSeeMoreParams<T>) {
  const { list: initialList, limit = 5 } = params;
  const [page, setPage] = useState(0);

  const list = initialList.slice(0, (page + 1) * limit);

  function onClick() {
    setPage(page + 1);
  }

  return {
    list,
    hasMore: list.length < initialList.length,
    buttonProps: {
      onClick,
    },
  };
}
