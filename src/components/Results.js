import React from 'react';
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import './Results.css';

export default function Results({ results }) {
  if (results) {
    return (
      <div className='Results'>
        <section>
          <h2>{results.word}</h2>
          {results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}{' '}
        </section>
        {results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
