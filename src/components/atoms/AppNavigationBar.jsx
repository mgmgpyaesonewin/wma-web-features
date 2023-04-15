import React from 'react';

function AppNavigationBar() {
  return (
    <nav className="bg-amber-400 dark:bg-amber-500 fixed w-full z-20 top-0 left-0 border-b border-amber-200 dark:border-amber-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Wave Money JS SDK
        </span>
      </div>
    </nav>
  );
}

export default AppNavigationBar;
