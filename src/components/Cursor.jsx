import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    // 1. Create link tag for Cursors-4U CDN stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.cursors-4u.net/cursors/animated/hachiware-a268bb1b-128.css';
    document.head.appendChild(link);

    // 2. Add the custom cursor class to html & body
    document.documentElement.classList.add('cursor-hachiware');
    document.body.classList.add('cursor-hachiware');

    // 3. Cleanup when component unmounts
    return () => {
      document.head.removeChild(link);
      document.documentElement.classList.remove('cursor-hachiware');
      document.body.classList.remove('cursor-hachiware');
    };
  }, []);

  return null; // Headless component (renders no JSX UI)
}