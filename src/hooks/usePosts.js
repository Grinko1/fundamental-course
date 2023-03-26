import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);
  return sortedPost;
};

export const useSortAndSearchPosts = (posts, sort, query) => {
  console.log(query, sort);
  const sortedPost = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    if (query) {
      return [...sortedPost].filter((item) =>
        item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );
    } else {
      return sortedPost;
    }
  }, [query, sortedPost]);

  return sortedAndSearchedPosts;
};
