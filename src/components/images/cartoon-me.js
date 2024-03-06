import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const CartoonMe = ({ id, url, size, isSmallestScreen }) => {
  return (
    <Box id={`${id}Wrapper`} alignItems={'center'} justifyContent={'center'}>
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
    </Box>
  );
};

export default CartoonMe;
