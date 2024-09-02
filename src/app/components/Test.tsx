import React from 'react';

interface TestProps {
  // Define any props here, for example:
  message?: string;
}

export const Test: React.FC<TestProps> = ({ message }) => {
  return (
    <div>{message || 'Test'}</div>
  );
};
