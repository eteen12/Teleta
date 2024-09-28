import { useEffect } from 'react';

export const useDisableScroll = (menuOpen) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset'; 
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);
};