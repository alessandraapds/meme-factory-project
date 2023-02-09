import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch(() => setError("Error message"))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
