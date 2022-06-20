// import React from 'react';

const isAuthenticated = () => {
  if(typeof window === 'undefined') {
    return false;
  }
  if(localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  }
  return false;
}

export default isAuthenticated;