import React from 'react';

export default function Phonetic({ phonetic }) {
  return (
    <div className='Phonetic'>
      <a href={phonetic.audio} target='_blank' rel='noreferrer'>
        Listen
      </a>
      <br />
      {phonetic.text}
    </div>
  );
}
