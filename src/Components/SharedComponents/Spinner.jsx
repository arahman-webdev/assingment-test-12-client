import React from 'react';

const LoadingSpinenr = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-75"></div>
      <p className="mt-4 text-white text-lg font-semibold">Loading</p>
    </div>
  );
};

export default LoadingSpinenr;