import React, { useState } from 'react';
import Image from 'next/image';

// mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  color: 'white',
  display: 'flex',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SelectableTimelineCard = ({
  company,
  title,
  date,
  key,
  logoSrc,
  positionData,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      key={key}
      variant="outlined"
      onClick={handleExpandClick}
      sx={{
        backgroundColor: '#080E21',
        borderWidth: '1px',
        borderColor: '#001F54',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
        borderRadius: '10px',
        maxWidth: 345,
        color: 'white',
      }}
    >
      <CardActionArea disableRipple>
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
      {positionData && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography level="body1" sx={{ fontFamily: 'Neue Regrade' }}>
              Products: {positionData.products}
            </Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default SelectableTimelineCard;
