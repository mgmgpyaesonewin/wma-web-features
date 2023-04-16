import React from 'react';
import BottomNavigationItem from '../atoms/BottomNavigation/BottomNavigationItem';
import HomeIcon from '../atoms/BottomNavigation/Icons/HomeIcon';
import StorageIcon from '../atoms/BottomNavigation/Icons/StorageIcon';
import ApiIcon from '../atoms/BottomNavigation/Icons/ApiIcon';
import AccountIcon from '../atoms/BottomNavigation/Icons/AccountIcon';

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <BottomNavigationItem>
          <HomeIcon />
        </BottomNavigationItem>
        <BottomNavigationItem>
          <StorageIcon />
        </BottomNavigationItem>
        <BottomNavigationItem>
          <ApiIcon />
        </BottomNavigationItem>
        <BottomNavigationItem>
          <AccountIcon />
        </BottomNavigationItem>
      </div>
    </div>
  );
}

export default BottomNavigation;
