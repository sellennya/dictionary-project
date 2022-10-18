import React from 'react';
import Synonyms from './Synonyms';

export default function Meaning({ meaning }) {
  return (
    <div className='Meaning'>
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}

              <br />

              <strong>Example:</strong>
              {definition.example}
              <Synonyms synonyms={meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
