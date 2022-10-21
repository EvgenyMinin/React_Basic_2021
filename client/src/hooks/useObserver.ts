import { useEffect, useRef } from 'react';

export const useObserver = (ref: any, canLoad:boolean, isLoading: boolean, callback: any) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    ref.current && observer.current.observe(ref.current);
  }, [isLoading]);
};
