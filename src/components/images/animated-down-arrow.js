import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 2, repeat: Infinity, repeatType: 'reverse' };

const AnimatedDownArrow = () => {
  return (
    <>
      <div width="10%" float="left" height="10%">
        <motion.svg
          width="50"
          height="auto"
          viewBox="0 0 136 191"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g color="white">
            <motion.path
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, type: 'spring' }}
              transition={transition}
              d="M72 188V0M72 188L134 138M72 188L2 138"
              strokeDasharray="0 1"
              stroke="white"
              strokeWidth="7"
            />
          </g>
        </motion.svg>
      </div>
    </>
  );
};

export default AnimatedDownArrow;
