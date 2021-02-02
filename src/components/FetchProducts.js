import { useEffect, useState } from "react";

const useFetchProducts = (url) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("An Error has Occured");
          }
          return response.json();
        })
        .then((products) => {
          setProducts(products);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(error.message);
          }
        });
    }, 50);
    return () => abort.abort();
  }, [url]);
  return { error, isLoading, products };
};

export default useFetchProducts;
