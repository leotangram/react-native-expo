import { movieApi } from '@/core/api/movie-api'
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response'
import { MovieMapper } from '@/infraestructure/mappers/movie.mapper'

interface TopRatedMoviesActionOptions {
  page?: number
  limit?: number
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10
}: TopRatedMoviesActionOptions) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page
      }
    })
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

    return movies
  } catch (error) {
    console.log(error)
    // throw new Error('Cannot load now playing movies')
    throw 'Cannot load top_rated movies'
  }
}
