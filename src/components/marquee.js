import React, { useState } from 'react';

const Marquee = () => {
  const [text, setText] = useState("Stay safe! Follow the guidelines to combat the epidemic. Remember to stay up-to-date on the latest guidelines and information related to the epidemic, as they may change over time. For more information and guidelines visit https://www.who.int/emergencies/disease-outbreak-news.");

  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        {text}
      </marquee>
    </div>
  );
};

export default Marquee;
