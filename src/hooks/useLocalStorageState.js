import { useState, useEffect } from "react";

const FIVE_HOURS = 5 * 60 * 60 * 1000;

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  setTimeout(() => {
    localStorage.clear();
  }, FIVE_HOURS);

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
