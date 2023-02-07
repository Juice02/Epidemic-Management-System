import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const CustomTexts = () => {
  const texts = [
    'Stay safe and healthy.',
    'Wash your hands regularly.',
    'Wear a mask in public places.',
    'Avoid large gatherings.',
    'Seek medical attention if you feel sick.',
    'Follow guidelines from local health authorities.',
  ];
var i=0;
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
        i++;
        if(i==6)
        i=0;
      currentIndex = (currentIndex + 1) ;
      setCurrentText(texts[i]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [i]);

  return (
    <div>
    <flex background-color='white'>
      <p>{currentText}</p>
      </flex>
    </div>
  );
};

export default CustomTexts;
