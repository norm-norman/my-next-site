import React from 'react';
import Image from 'next/image';

// mui imports
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// component imports
import ExpandMore from '../../custom-stylized/expand-collapse-toggle';

const VisibleCardContent = ({
  company,
  title,
  date,
  logoSrc,
  positionData,
  expanded,
  handleExpandClick,
}) => {
  return (
    <>
      <CardActionArea disableRipple disabled={!positionData}>
        <CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography variant="h6">{company}</Typography>
            <Image
              alt={'wayfair logo'}
              src={`/${logoSrc}`}
              width="25"
              height="25"
            />
            <Typography level="body2" sx={{ fontFamily: 'Neue Regrade' }}>
              {date}
            </Typography>
          </div>
          <Typography sx={{ fontFamily: 'Neue Regrade' }} variant="h6">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {positionData && (
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      )}
    </>
  );
};

export default VisibleCardContent;
