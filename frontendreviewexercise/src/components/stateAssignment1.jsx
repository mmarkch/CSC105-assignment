import React, { useState } from 'react';

const StateAssignmentOne = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <button onClick={handleClick}>{` ${count} `}</button>
    </section>
  );
};

export default StateAssignmentOne;
