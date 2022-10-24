import React from 'react';
import './Phonetic.css';

export default function Phonetic({ phonetic }) {
  return (
    <div className='Phonetic'>
      <a href={phonetic.audio} target='_blank' rel='noreferrer'>
        Listen
      </a>
      <span className='text'>{phonetic.text}</span>
    </div>
  );
}
