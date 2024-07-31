import { API_URL, API_KEY } from '@env';
import { AuthCredentials } from '@types';
import axios from 'axios';

export const BASE_URL = API_URL;

export const HttpClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export type ResponseErrorProps = {
  message: string;
  type?: TypeOptions;
};

type TypeOptions =
  | 'USERNAME_EXISTS'
  | 'CODE_DELIVERY_FAILURE'
  | 'USER_NOT_CONFIRMED'
  | 'PASSWORD_RESET_REQUIRED'
  | 'CODE_MISMATCH'
  | 'ALIAS_EXISTS'
  | 'EXPIRED_CODE'
  | 'INVALID_PASSWORD'
  | 'INVALID_PARAMETER'
  | 'INTERNAL_SERVER_ERROR';

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

HttpClient.interceptors.response.use(
  response => response,
  handleErrorInterceptor,
);

function handleErrorInterceptor(
  responseError: any,
): Promise<ResponseErrorProps | string> {
  if (
    responseError.response &&
    responseError.response.status &&
    responseError.response.status === 401
  ) {
    return Promise.reject(responseError);
  }

  if (responseError.response && responseError.response.data) {
    throw responseError.response.data;
  }

  throw responseError;
}

export function registerInterceptor({ removeCredentials }: InterceptorProps) {
  const interceptor = HttpClient.interceptors.response.use(
    response => response,
    async responseError => {
      if (responseError.response.status === 401) {
        removeCredentials();
        return Promise.reject(responseError);
      }

      return Promise.reject(responseError);
    },
  );

  // remove listener when component unmount
  return () => HttpClient.interceptors.response.eject(interceptor);
}
