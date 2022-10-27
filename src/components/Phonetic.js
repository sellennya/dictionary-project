import React from 'react';
import './Phonetic.css';
import useSound from 'use-sound';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export default function Phonetic({ phonetic }) {
  const [playSound] = useSound(phonetic.audio);
  return (
    <div className='Phonetic'>
      <FontAwesomeIcon
        icon={faVolumeUp}
        onClick={() => playSound()}
        className='sound'
      />
      <span className='text'>{phonetic.text}</span>
    </div>
  );
}
