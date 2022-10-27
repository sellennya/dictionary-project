import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';
import Photos from './Photos';

export default function Dictionary({ defaultKeyword }) {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then((response) => {
      console.log(response.data);
      setResults(response.data[0]);
    });

    //https://www.pexels.com/api/documentation/?language=javascript
    let pexelApiKey =
      '563492ad6f917000010000013c24bb8269eb4efd863b1b3f5d3e1dc1';
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then((response) => {
      setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return <p>Loading...</p>;
  }
}
