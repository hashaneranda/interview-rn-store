import { useState, useEffect, useCallback } from 'react';

import { getValue, setValue } from '../utils/storage';

interface LocalStorageType {
  key: string;
  initailValue: any;
}

export default function useLocalStorage({ key, initailValue }: LocalStorageType) {
  // const initLocalStorageVal = useMemo(async () => await getValue(key), [key]);

  const [currentData, setCurrentData] = useState(initailValue);

  const initLocalStorageVal = useCallback(async () => await getValue(key), [key]);

  useEffect(() => {
    initLocalStorageVal().then((res: any) => {
      setCurrentData(res);
    });
  }, [initLocalStorageVal]);

  useEffect(() => {
    setValue(key, currentData);
  }, [currentData, key]);

  return [currentData, setCurrentData];
}
