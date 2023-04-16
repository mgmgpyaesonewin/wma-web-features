import React from 'react';
import NavLinksGroup from '../components/molecules/NavLinksGroup';
import AppNavigationBar from '../components/atoms/AppNavigationBar';
import BottomNavigation from '../components/molecules/BottomNavigation';

function Home() {
  return (
    <>
      <AppNavigationBar />
      <NavLinksGroup />
      <BottomNavigation />
    </>
  );
}

export default Home;
