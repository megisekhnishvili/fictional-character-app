import React from 'react';
import { useParams } from 'react-router-dom';

const facts = {
  1: 'Harry Potter was born on July 31, 1980.',
  2: 'Harry Potter\'s parents were killed by Voldemort when he was a baby.',
  3: 'Harry Potter is known as "The Boy Who Lived".',
};

const FactPage = () => {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div>
      {fact ? (
        <p>{fact}</p>
      ) : (
        <p>Fact not found</p>
      )}
    </div>
  );
};

export default FactPage;
