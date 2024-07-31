import { MovieProps } from '@types';

type Size = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';

export function regeneratePosterPath(
  posterPath: MovieProps['posterPath'] = '',
  size: Size,
) {
  return `${posterPath.replace('/w185', `/${size}`)}`;
}
