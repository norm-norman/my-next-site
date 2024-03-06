import React from 'react';

const styles = {
  color: '#ffffff',
  flexBasis: '100%',
};
const ValuePropWithHeader = ({ header, text }) => {
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default ValuePropWithHeader;
