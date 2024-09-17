import axios from "axios";
import { useState, useEffect } from "react";

function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  //   useEffect(() => {
  //     setBooks([]);
  //   }, [query]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://picsum.photos/v2/list",
      params: { page: pageNumber, limit: 8 },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setImages((prev) => [
          ...prev,
          ...res.data.map((img) => img.download_url),
        ]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
}

export default useBookSearch;
