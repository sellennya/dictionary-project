import React from 'react';

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return synonyms.map((synonym, index) => {
      return (
        <ul key={index} className='Synonyms'>
          <li>{synonym}</li>
        </ul>
      );
    });
  } else {
    return null;
  }
}
