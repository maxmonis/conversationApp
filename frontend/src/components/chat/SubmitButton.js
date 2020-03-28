import React from 'react';

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 0 }}>
      <span onClick={handleSubmit} role='img' aria-label='submit'>
        👍
      </span>
    </div>
  );
};

export default SubmitButton;
