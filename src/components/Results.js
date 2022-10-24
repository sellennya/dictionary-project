import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';

export default function Results({ results }) {
  if (results) {
    return (
      <div className='Results'>
        <h2>{results.word}</h2>
        {results.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}{' '}
        {results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
