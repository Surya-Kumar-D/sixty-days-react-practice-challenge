import { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

function Day8() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, images, hasMore } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
          console.log(pageNumber);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore, pageNumber]
  );

  return (
    <div className="image-grid">
      {images.map((image, index) => {
        if (images.length === index + 1) {
          return (
            <div ref={lastElement} key={image}>
              <img src={image} alt="image" />
            </div>
          );
        } else {
          return (
            <div key={image}>
              <img src={image} alt="image" />
            </div>
          );
        }
      })}
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
    </div>
  );
}

export default Day8;
