import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { contextData } from '@/contexts/AuthContext';

const useColorMode = () => {
  const { setTheme } = contextData();
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    const htmlClass = window.document.documentElement.classList;

    if (colorMode === 'dark') {
      bodyClass.add(className);
      htmlClass.add(className);
    } else {
      bodyClass.remove(className);
      htmlClass.remove(className);
    }
    
    // Update theme in auth context
    setTheme(colorMode);
  }, [colorMode, setTheme]);

  return [colorMode, setColorMode];
};

export default useColorMode;
