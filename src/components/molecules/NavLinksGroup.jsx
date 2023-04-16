import React from 'react';
import NavLink from '../atoms/NavigationLink';

function NavLinksGroup() {
  return (
    <div className="flex flex-col justify-center mx-2 mt-2">
      <NavLink to="/device-information" disabled={false}>
        Device Information
      </NavLink>
      <NavLink to="/camera" disabled>
        Camera
      </NavLink>
      <NavLink to="/location" disabled>
        Location
      </NavLink>
      <NavLink to="/contacts" disabled>
        Contacts
      </NavLink>
      <NavLink to="/settings" disabled>
        Settings
      </NavLink>
      <NavLink to="/permissions" disabled>
        Permissions
      </NavLink>
      <NavLink to="/otp" disabled>
        Read OTP from SMS
      </NavLink>
      <NavLink to="/biometrics" disabled>
        Biometrics
      </NavLink>
    </div>
  );
}

export default NavLinksGroup;
