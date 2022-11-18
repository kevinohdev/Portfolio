import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography></Typography>
      <Navbar></Navbar>
      {children}
    </>
  );
}
