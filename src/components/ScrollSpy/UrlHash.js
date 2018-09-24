import React from 'react';

const UrlHash = ({hash = null}) => {
  if (hash) {
    window.location.hash = hash;
  }
  return null;
};

export default UrlHash;