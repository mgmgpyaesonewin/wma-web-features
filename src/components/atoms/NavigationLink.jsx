import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink({ children, to }) {
  return (
    <Link
      className="text-white text-center bg-slate-400 hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      to={to}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
