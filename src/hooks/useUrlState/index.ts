import { useSearchParams } from 'react-router-dom';
import { URLStateConfigs } from './types';
import { useEffect, useState } from 'react';

export const useUrlState = ({ name, value }: URLStateConfigs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInUrl = searchParams.get(name);
  const [state, setState] = useState(isInUrl ?? value);

  useEffect(() => {
    setSearchParams((pre) => {
      const otherSearchParams: { [x: string]: string } = {};
      pre.forEach((value, key) => (otherSearchParams[key] = value));
      return { ...otherSearchParams, [name]: state };
    });
  }, [state]);

  return { state, setState };
};
