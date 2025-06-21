import { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const sampleData = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Strawberry',
  'Pineapple',
  'Mango',
  'Peach',
  'Blueberry',
  'Watermelon',
];

const Search = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (text.length >= 3) {
      const filtered = sampleData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [text]);

  const toggleSearch = () => {
    setIsVisible((prev) => !prev);
    setText('');
    setResults([]);
  };

  return (
    <div className="d-flex">
      <div className="d-flex align-items-center">
        {isVisible && (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search..."
            className="form-control"
          />
        )}
        <button
          onClick={toggleSearch}
          className="btn-icon"
          aria-label="Toggle search input"
        >
          <BiSearchAlt2 size={24} />
        </button>
      </div>

      {results.length > 0 && (
        <ul className="search-results list-unstyled m-0">
          {results.map((item, index) => (
            <li key={index} className="search-result-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {text.length >= 3 && results.length === 0 && (
        <div className="text-muted small">No results found.</div>
      )}
    </div>
  );
};

export default Search;
