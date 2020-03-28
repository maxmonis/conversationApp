import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 0 }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitButton;
