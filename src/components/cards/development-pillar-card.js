import React from 'react';

// mui imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

// component imports
import ValuePropWithHeader from '../text/value-prop-with-header';

const DevelopmentPillarCard = ({ key, header, text, icon }) => {
  return (
    <>
      <Box sx={{ minWidth: 275, display: 'flex', zIndex: 2 }}>
        <Card
          key={key}
          variant="outlined"
          sx={{
            backgroundColor: '#080E21',
            borderWidth: '1px',
            borderColor: '#001F54',
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
            borderRadius: '10px',
            maxWidth: 345,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CardContent
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Avatar sx={{ backgroundColor: '#080E21' }}>{icon}</Avatar>
            <ValuePropWithHeader key={key} header={header} text={text} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default DevelopmentPillarCard;
