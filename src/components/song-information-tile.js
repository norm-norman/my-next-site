import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

const SongInformationTile = ({ name, uri, imageURL, artistName }) => {
  return (
    <>
      <Stack alignItems={'center'} justifyContent={'center'} spacing={2}>
        <Image src={imageURL} width={640} height={640} />
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
