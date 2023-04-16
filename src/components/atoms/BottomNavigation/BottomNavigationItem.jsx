import React from 'react';
import { PropTypes } from 'prop-types';

function BottomNavigationItem({ children }) {
  return (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
    >
      {children}
    </button>
  );
}

BottomNavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BottomNavigationItem;
