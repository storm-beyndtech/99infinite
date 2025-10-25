import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const htmlClass = window.document.documentElement.classList;

    if (colorMode === 'dark') {
      htmlClass.add(className);
    } else {
      htmlClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
