import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowSize({
        width: window.width,
        height: window.height,
      });
    });

    return () => subscription.remove();
  }, []);

  return windowSize;
}
