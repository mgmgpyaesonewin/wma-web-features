import React from 'react';
import NavLink from '../atoms/NavigationLink';

function NavLinksGroup() {
  return (
    <div className="flex flex-col justify-center mx-2">
      <NavLink to="/camera">Camera</NavLink>
      <NavLink to="/location">Location</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/permissions">Permissions</NavLink>
      <NavLink to="/otp">Read OTP from SMS</NavLink>
      <NavLink to="/biometrics">Biometrics</NavLink>
    </div>
  );
}

export default NavLinksGroup;
