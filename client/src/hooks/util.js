import { useState } from "react";

function useSearchBox() {
  const [searchService, setSearchService] = useState("");
  const [service, setService] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [category, setCategory] = useState([]);

  return {
    searchService,
    setSearchService,
    service,
    setService,
    searchCategory,
    setSearchCategory,
    category,
    setCategory,
  };
}

export default useSearchBox;
