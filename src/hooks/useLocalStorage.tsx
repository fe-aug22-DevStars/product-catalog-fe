import { useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) || '[]'),
  );

  const setValues = (phoneId: string) => {
    const idsInStorage = JSON.parse(localStorage.getItem(key) || '[]');
    let newIds;

    if (idsInStorage.includes(phoneId)) {
      newIds = idsInStorage.filter((id: string) => id !== phoneId);
    } else {
      idsInStorage.push(phoneId);
      newIds = idsInStorage;
    }

    localStorage.setItem(key, JSON.stringify(newIds));

    setValue(newIds);
  };

  return [value, setValues];
};
