import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitButton;
