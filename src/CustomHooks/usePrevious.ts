import { useEffect, useRef } from 'react';

const usePrevious = <T>(value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
