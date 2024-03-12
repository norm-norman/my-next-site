import React from 'react';
import Ticker from 'framer-motion-ticker';
import Typography from '@mui/joy/Typography';

const ScrollingBackgroundText = ({ lineProps }) => {
  const texts = [
    { text: 'Ways of Working', color: 'grey', left: 0 },
    { text: 'Methodology', color: '#1EC296', left: 5 },
    { text: 'Pillars of Great Development', color: '#D6D6D6', left: 10 },
  ];

  return (
    <div
      style={{
        maxWidth: '97vw',
        left: '1vw',
      }}
    >
      {lineProps.map(({ speed, direction }) => {
        return (
          <div key={`${speed}-row`} style={{ position: 'relative' }}>
            <Ticker duration={speed} direction={direction}>
              {texts.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.1em',
                    color: item.color,
                    fontSize: '5rem',
                    opacity: '0.5',
                  }}
                >
                  <Typography level={'h5'}>{item.text}</Typography>
                </div>
              ))}
            </Ticker>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollingBackgroundText;

/**
 * speeds:
 * 49,34,24
 *
 * directions: 1, -1, 1
 */
