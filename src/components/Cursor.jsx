import { useEffect } from 'react';

export default function Cursor({ theme }) {
  useEffect(() => {
    const isDarkMode = theme === 'dark';

    const link = document.createElement('link');

    link.rel = 'stylesheet';

    link.href = isDarkMode
      ? 'https://cdn.cursors-4u.net/cursors/animated/chiikawa-88aad27d-128.css'
      : 'https://cdn.cursors-4u.net/cursors/animated/hachiware-a268bb1b-128.css';

    document.head.appendChild(link);

    const cursorClass = isDarkMode
      ? 'cursor-chiikawa'
      : 'cursor-hachiware';

    document.documentElement.classList.add(cursorClass);
    document.body.classList.add(cursorClass);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }

      document.documentElement.classList.remove(cursorClass);
      document.body.classList.remove(cursorClass);
    };
  }, [theme]);

  return null;
}

