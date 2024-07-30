import { setupServer } from 'msw/node';

import { moviesHandlers } from './Movies/moviesHandlers';

export const server = setupServer(...moviesHandlers);

