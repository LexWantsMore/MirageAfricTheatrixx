import React from 'react';

const Alert = ({ type, message, onClose }) => {
  const alertStyles = {
    success: {
      border: 'border-green-500',
      background: 'bg-green-50',
      text: 'text-green-600',
      svg: 'text-green-500',
    },
    error: {
      border: 'border-red-500',
      background: 'bg-red-50',
      text: 'text-red-600',
      svg: 'text-red-500',
    },
  };

  const styles = alertStyles[type] || alertStyles.success;

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-12 mx-4 px-4 rounded-md border-l-4 ${styles.border} ${styles.background} md:max-w-2xl md:mx-auto md:px-8 z-50`}>
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 rounded-full ${styles.svg}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className={`font-semibold ${styles.text}`}>
              {type === 'success' ? 'Success' : 'Error'}
            </span>
            <p className={`mt-1 ${styles.text}`}>
              {message}
            </p>
          </div>
        </div>
        <button className={`self-start ${styles.svg}`} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
