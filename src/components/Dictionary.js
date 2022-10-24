import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then((response) => {
      setResults(response.data[0]);
    });
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className='Dictionary'>
        <section>
          <h1>What word do you want to look up?</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              search();
            }}
          >
            <input
              type='search'
              onChange={(event) => {
                setKeyword(event.target.value);
              }}
              defaultValue={defaultKeyword}
            />
          </form>
          <div className='hint'>
            suggested words: sunset, yoga, wine, phone...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return <p>Loading...</p>;
  }
}
