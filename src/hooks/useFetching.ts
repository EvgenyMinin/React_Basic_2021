import { useState } from 'react';

export const useFetching = (callback: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
