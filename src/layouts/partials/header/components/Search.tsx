import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'usehooks-ts';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [query, setQuery] = useState(q ?? '');
  const debouncedQuery = useDebounce<string>(query, 700);

  useEffect(() => {
    if (debouncedQuery == null) return;
    setSearchParams(debouncedQuery !== '' ? { q: debouncedQuery } : {});
  }, [debouncedQuery, setSearchParams]);

  return (
    <input
      value={query}
      type="text"
      placeholder="Czego chcesz posłuchać?"
      className="h-12 border-0 bg-mine-shaft-600 py-1.5 w-36 md:w-48 lg:w-[364px] px-5 rounded-full text-sm placeholder:text-dove-gray"
      onInput={(e) => setQuery(e.currentTarget.value)}
    />
  );
};

export default Search;
