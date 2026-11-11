import { useEffect, useState } from "react";

export function useLiveData(url, key, initial) {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const es = new EventSource(url);
    es.addEventListener(key, (e) => setData(JSON.parse(e.data)));
    return () => es.close();
  }, [url, key]);

  return data;
}