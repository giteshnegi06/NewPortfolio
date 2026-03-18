import React, { useState, useEffect } from 'react';

const StateBlinkComponent = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 500); // Toggles visibility every 500ms

    return () => clearTimeout(interval); // Clean up the timeout
  }, [isVisible]);

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }} className='flex items-center' >
      <button className='bg-[#f68b43] rounded-4xl p-1 h-2 w-2'></button>
    </div>
  );
};

export default StateBlinkComponent;
