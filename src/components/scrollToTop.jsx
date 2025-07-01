import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    if (prevPath.current !== null && prevPath.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    prevPath.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
