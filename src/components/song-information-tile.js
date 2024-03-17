import React from 'react';
import Image from 'next/image';

// mui imports
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

const SongInformationTile = ({ name, uri, imageURL, artistName }) => {
  return (
    <>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
        <Image src={imageURL} width={300} height={300} />
        <Tooltip title="You will need a spotify account to play this track.">
          <Button href={uri} variant="outlined">
            "{name}" by {artistName}
          </Button>
        </Tooltip>
      </Stack>
    </>
  );
};

export default SongInformationTile;
