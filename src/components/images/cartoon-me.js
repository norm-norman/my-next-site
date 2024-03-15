import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Image from 'next/image';

const CartoonMe = ({ id, url, size, isSmallestScreen }) => {
  return (
    <Box id={`${id}Wrapper`} alignItems={'center'} justifyContent={'center'}>
<<<<<<< Updated upstream
      <Tooltip
        disableFocusListener
        followCursor
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        title={<p>I was made by the GenAI Text-To-Image tool on Canva!</p>}
      >
        {!isSmallestScreen && (
          <Image
            id={id}
            src={url}
            alt="Cartoon picture of myself"
            width={size}
            height={size}
          />
        )}
      </Tooltip>
=======
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
>>>>>>> Stashed changes
    </Box>
  );
};

export default CartoonMe;
