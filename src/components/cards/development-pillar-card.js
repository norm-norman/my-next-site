import React from 'react';
import ValuePropWithHeader from '../text/value-prop-with-header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DevelopmentPillarCard = ({ key, header, text }) => {
  return (
    <>
      <Box sx={{ minWidth: 275, display: 'flex', zIndex: 2 }}>
        <Card
          key={key}
          variant="outlined"
          sx={{
            backgroundColor: '#022526',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
            maxWidth: 345,
          }}
        >
          <CardContent>
            <ValuePropWithHeader key={key} header={header} text={text} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default DevelopmentPillarCard;
