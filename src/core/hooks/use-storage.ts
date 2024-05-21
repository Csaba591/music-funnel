import { useEffect, useState } from "react";

export function useStorage<TStored>(
  collection: string
): [TStored | null, React.Dispatch<React.SetStateAction<TStored | null>>] {
  const rawData = localStorage.getItem(collection);
  const [storedData, setStoredData] = useState<TStored | null>(
    rawData === null ? null : JSON.parse(rawData)
  );

  useEffect(() => {
    localStorage.setItem(collection, JSON.stringify(storedData));
  }, [storedData]);

  return [storedData, setStoredData];
}
