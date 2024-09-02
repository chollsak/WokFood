import { Button } from '@mui/material';
import React from 'react';

interface TestProps {
  // Define any props here, for example:
  message?: string;
}

export const Test: React.FC<TestProps> = ({ message }) => {
  return (
    <div className='text-red-600'>
        {message || 'Test'}
    <Button variant="contained"/>
    </div>
  );
};
