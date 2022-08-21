import React from "react";

export default function Info() {
  return (
    <div>
      <div className='bg-amber-400 dark:text-black shadow-lg w-80 h-20 p-1 rounded-md'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          viewBox='0 0 20 20'
          fill='red'>
          <path
            fillRule='evenodd'
            d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
            clipRule='evenodd'
          />
        </svg>
        <span className='font-semibold'>This site is under development.</span>
      </div>
    </div>
  );
}
