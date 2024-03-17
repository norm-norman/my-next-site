import React from 'react';
import Ticker from 'framer-motion-ticker';

// mui imports
import Typography from '@mui/joy/Typography';

const ScrollingTextLines = ({ lineProps }) => {
  return (
    <div
      style={{
        maxWidth: '98vw',
      }}
    >
      {lineProps.map(({ speed, direction, textProps }) => {
        return (
          <div key={`${speed}-row`} style={{ position: 'relative' }}>
            <Ticker duration={speed} direction={direction}>
              {textProps.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.1em',
                    color: item.color,
                    fontSize: '5rem',
                    opacity: '0.5',
                  }}
                >
                  <Typography level="h5">{item.text}</Typography>
                </div>
              ))}
            </Ticker>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollingTextLines;
