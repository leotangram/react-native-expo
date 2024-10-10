import { movieApi } from '@/core/api/movie-api'
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { MovieDBMovieResponse } from '@/infraestructure/interfaces/moviedb-movie.response'
import { MovieMapper } from '@/infraestructure/mappers/movie.mapper'

export const getMovieByIdAction = async (
  id: number
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`)

    return MovieMapper.fromTheMovieDBToCompleteMovie(data)
  } catch (error) {
    console.log(error)
    // throw new Error('Cannot load now playing movies')
    throw 'Cannot load now playing movies'
  }
}
