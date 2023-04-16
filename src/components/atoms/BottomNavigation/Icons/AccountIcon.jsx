import React from 'react';

function AccountIcon() {
  return (
    <>
      <svg
        className="w-6 h-6 mb-1 text-gray-500 group-hover:text-amber-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-2.667 0-8 1.333-8 4v1h16v-1c0-2.667-5.333-4-8-4z" />
      </svg>
      <span className="text-sm text-gray-500 group-hover:text-amber-600">Account</span>
    </>
  );
}

export default AccountIcon;
