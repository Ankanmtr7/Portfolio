import { useRef } from "react";

// Throttle function to limit the rate of function calls
const useThrottle = (func, delay) => {
  const lastCallRef = useRef(0);

  return function (...args) {
    const now = Date.now();
    if (now - lastCallRef.current < delay) {
      return;
    }
    lastCallRef.current = now;
    return func(...args);
  };
};

export default useThrottle;
