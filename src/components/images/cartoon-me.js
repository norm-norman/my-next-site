import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Image from 'next/image';

const CartoonMe = ({ priority, id, url, size, isSmallestScreen }) => {
  return (
    <Box id={`${id}Wrapper`} alignItems={'center'} justifyContent={'center'}>
      {!isSmallestScreen && (
        <Image
          priority={priority}
          id={id}
          src={url}
          alt="Cartoon picture of myself"
          width={size}
          height={size * 0.9}
        />
      )}
    </Box>
  );
};

export default CartoonMe;
