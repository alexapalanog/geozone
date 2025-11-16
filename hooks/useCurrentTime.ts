import { useState, useEffect } from 'react';

const useCurrentTime = (options: Intl.DateTimeFormatOptions = {}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId);
  }, []);

  return currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    ...options
  });
};

export default useCurrentTime;
