import { useSearchParams } from 'react-router-dom';
import { URLStateConfigs } from './types';
import { useState } from 'react';
import { inOriginalType } from '../../constants';

export const useUrlState = <T>({ name, value }: URLStateConfigs<T>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isInUrl = searchParams.get(name);
  const [state, setState] = useState(
    isInUrl ? inOriginalType(value, isInUrl) : value
  );

  const setStateValue = (newVal: typeof value) => {
    // Setting State Locally
    setState(newVal);

    // On changing, saving it in URL
    setSearchParams((pre) => {
      const otherSearchParams: { [x: string]: string } = {};
      pre.forEach((value, key) => (otherSearchParams[key] = value));
      return { ...otherSearchParams, [name]: String(newVal) };
    });
  };
  return [state, setStateValue] as [T, typeof setState]; // returning Tuple (fixed size array)
};
