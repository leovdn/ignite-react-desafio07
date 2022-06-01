import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const response = await api.get(`/api/images`, {
        params: {
          after: pageParam,
        },
      });

      return response.data;
    },
    {
      getNextPageParam: lastPage => {
        const { after } = lastPage;

        if (after) return after;

        return null;
      },
    }
  );

  const formattedData = useMemo(() => {
    //  TODO FORMAT AND FLAT DATA ARRAY

    if (data !== undefined) {
      const cards = data?.pages.flatMap(page => {
        const allCards = page.data.map(card => {
          return card;
        });
        return allCards;
      });

      return cards;
    }

    return [];
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return <Loading />;
  }

  // TODO RENDER ERROR SCREEN
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
