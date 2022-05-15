import {useEffect} from 'react'

export const useAsync = (
  setLoading,
  asyncFunction,
  successFunction,
  errorFunction,
  dependencias = []
) => {
  useEffect(() => {
    setLoading(true);

    let isActive = true;

    asyncFunction()
      .then((result) => {
        if (isActive) successFunction(result);
      })
      .catch((error) => {
        if (isActive) errorFunction && errorFunction(error);
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, dependencias);
};