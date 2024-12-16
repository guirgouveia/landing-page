import { API } from '../config/constants';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export const http = {
  async request(url: string, options: RequestOptions = {}) {
    const controller = new AbortController();
    const timeout = options.timeout || API.TIMEOUT;
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        credentials: 'include',
        signal: controller.signal,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new HttpError(
          response.status,
          error.message || 'An error occurred',
          error
        );
      }

      return response.json();
    } finally {
      clearTimeout(timeoutId);
    }
  },

  get(url: string, options?: RequestOptions) {
    return this.request(url, { ...options, method: 'GET' });
  },

  post(url: string, data?: any, options?: RequestOptions) {
    return this.request(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(url: string, data?: any, options?: RequestOptions) {
    return this.request(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(url: string, options?: RequestOptions) {
    return this.request(url, { ...options, method: 'DELETE' });
  },
};