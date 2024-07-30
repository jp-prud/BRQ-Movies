import { BASE_URL } from '@services';
import { MoviePropsAPI, PageAPI } from '@types';
import { cloneDeep } from 'lodash';
import { HttpResponse, http } from 'msw';
import { mockedMoviesData } from './mocks';

let inMemoryResponse = cloneDeep(mockedMoviesData.MoviesAPIListResponse)

export const moviesHandlers = [
  http.get(`${BASE_URL}/movie/popular?language=en-US&page=1`, () => {
    const response: PageAPI<MoviePropsAPI> = inMemoryResponse;

    return HttpResponse.json(response, { status: 200 });
  }),

  http.get(`${BASE_URL}/movie/1?language=en-US`, () => { 
    const response: MoviePropsAPI = inMemoryResponse.results[0];

    return HttpResponse.json(response, { status: 200 });
  })
]