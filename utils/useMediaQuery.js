import { useState, useEffect } from "react";
import windowSize from "../utils/windowSize";
const useMediaQuery = (query) => {
  const [width] = windowSize();
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;