import { inAppDefaults } from 'apollo/cache';
import { setAppData } from 'apollo/operations';
import { useLayoutEffect } from 'react';

export default () => {
  useLayoutEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth <= 768;
      const { isMobile: cacheIsMobile } = inAppDefaults();
      if (isMobile !== cacheIsMobile) setAppData({ isMobile, isExpanded: !isMobile });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
};
