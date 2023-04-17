import React from 'react';
import Country from './Country';

const Results = ({ results }) => {

  return (
    <div>
      {results.map((result) => (
        <Country
          key={result.name}
          name={result.name}
          flag={result.flag}
          capital={result.capital}
          continent={result.continent}
          poblation={result.poblation}
        />
      ))}
    </div>
  );
};

export default Results;