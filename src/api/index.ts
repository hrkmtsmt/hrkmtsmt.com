import axios, { AxiosError } from 'axios';
import { baseURL } from '@src/utilities/baseURL';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: baseURL(),
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const axiosInstance: AxiosInstance = axios.create(axiosRequestConfig);

export class Success<T> {
  constructor(readonly value: T, readonly error?: null | undefined) {}

  public isSuccess(): this is Success<T> {
    return true;
  }

  public isFailure(): this is Failure<unknown> {
    return false
  }
};

export class Failure<E> {
  constructor(readonly error: E, readonly value?: null | undefined) {}

  public isSuccess(): this is Success<unknown> {
    return false;
  }

  public isFailure(): this is Failure<E> {
    return true;
  }
};

export type Result<T, E> = Success<T> | Failure<E>;

class ApiError extends Error {
  constructor(readonly message: string) {
    super(message);
    this.name = 'API error.';
  }
}

class SystemError extends Error {
  constructor() {
    super();
    this.message = 'System error.';
    this.name = 'System error.';
  }
}

type ErrorResponse = ApiError | SystemError;

const createApi = (axiosInstance: AxiosInstance) => {
  return {
    get: async <T>(path: string): Promise<Result<T, ErrorResponse>> => {
      try {
        const { data } = await axiosInstance.get<T>(path);
        return new Success<T>(data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return new Failure(new ApiError(error.message));
        }
        return new Failure(new SystemError());
      }
    },
    post: async <T, U>(path: string, body: U): Promise<Result<T, ErrorResponse>>  => {
      try {
        const { data } = await axiosInstance.post<T>(path, body);
        return new Success<T>(data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return new Failure(new ApiError(error.message));
        }
        return new Failure(new SystemError());
      }
    },
    patch: async <T, U>(path: string, request: U): Promise<Result<T, ErrorResponse>>  => {
      try {
        const { data } = await axiosInstance.patch<T>(path, request);
        return new Success<T>(data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return new Failure(new ApiError(error.message));
        }
        return new Failure(new SystemError());
      }
    },
    delete: async <T>(path: string): Promise<Result<T, ErrorResponse>>  => {
      try {
        const { data } = await axiosInstance.delete<T>(path);
        return new Success<T>(data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          return new Failure(new ApiError(error.message));
        }
        return new Failure(new SystemError());
      }
    }
  }
};

export const api = createApi(axiosInstance)