import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { popularMoviesAction } from '@/core/actions/movies/pupular.action'
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.action'
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.action'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  const topRatedQuery = useInfiniteQuery({
    queryKey: ['movies', 'top-rated'],
    queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours,
    getNextPageParam: (_, pages) => pages.length + 1
  })

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery }
}
