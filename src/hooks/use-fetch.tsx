import { useState } from "react";

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fn: (...args: any[]) => Promise<void>;
}

function useFetch<T>(cb: (options: any, ...args: any[]) => Promise<T>, options: any = {}): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(options, ...args);
      setData(response);
    } catch (error: any) {
      setError(error instanceof Error ? error : new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn };
}

export default useFetch;
