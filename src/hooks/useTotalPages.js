import { useMemo } from 'react';

export const useTotalPages = (totalPages) => {
  const countPages = useMemo(() => {
    return [...Array(totalPages + 1).keys()].slice(1);
  }, [totalPages]);
  return countPages;
};
