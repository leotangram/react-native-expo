import { movieApi } from '../../api/movie-api'
import { MovieDBCreditResponse } from '@/infraestructure/interfaces/moviedb-credits.response'
import { CastMapper } from '@/infraestructure/mappers/cast.mapper'

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditResponse>(
      `/${movieId}/credits`
    )

    return data.cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error) {
    console.error('Error getting movie cast', error)
    throw 'Cant load cast by movie id'
  }
}
