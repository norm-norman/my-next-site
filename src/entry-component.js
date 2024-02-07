// import React from 'react';
import SongInformationTile from './components/song-information-tile';
import * as React from 'react';
import Button from '@mui/material/Button';

const EntryComponent = ({ song }) => {
  const title = song?.item?.name;
  const songInfo = song?.item;
  const songURL = songInfo?.uri;
  const imageURL = songInfo?.album?.images[0]?.url;
  const artistName = songInfo?.artists[0]?.name;
  console.log(song?.item?);
  return (
    <>
      <SongInformationTile
        name={title}
        uri={songURL}
        imageURL={imageURL}
        artistName={artistName}
      />
    </>
  );
};

export default EntryComponent;
