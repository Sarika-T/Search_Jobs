import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import currencySymbolMap from 'currency-symbol-map';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',backgroundColor: 'blue' }}
  >
    •
  </Box>
);


export default function CardContentDes(props) {
    const {card, index} = props
    const [expanded, setExpanded] = useState(false);
    const currencySymbol = currencySymbolMap(card?.salaryCurrencyCode);
    const toggleExpanded = () => {
        // setExpanded(!expanded);
    };
  return (
    <Card sx={{ minWidth: 275, boxShadow: "0px 2px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 1px 0px rgba(0, 0, 0, 0.14)", width: 275, height: 400}}>
      <CardContent className='cardcontent-page'>
        <Typography className='cardcontent-page-top'sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <div className='cardcontent-page-top'>
            <div className='cardcontent-page-top-left'>
                <img className='cardcontent-page-top-left-image' src= {card?.logoUrl} alt= 'Imgae of card' />
            </div>
            <div className='cardcontent-page-top-right'>
                <span className='cardcontent-page-top-right-company'>{card?.companyName}</span>
                <span className='cardcontent-page-top-right-role'>{card?.jobRole}</span>
                <span className='cardcontent-page-top-right-location'>{card?.location}</span>
            </div>
        </div>
        </Typography>
        <Typography variant="h5" component="div" className="cardcontent-page-middle">
          <span className="cardcontent-page-middle-text">{`Expected Salary: ${currencySymbol} ${card?.minJdSalary && card?.minJdSalary} - ${card?.maxJdSalary && card?.maxJdSalary} LPA`}</span>
        </Typography>
        <Typography sx={{ mb: 1.5, textAlign: "left" }} color="text.secondary">
        <div>About Company:</div>
        <div>
            <p style={{ maxHeight: expanded ? 'none' : '4em', overflow: 'hidden' }} >{card?.jobDetailsFromCompany}</p>
            {!expanded && (
            <button className= "cardcontent-page-middle-button" onClick={toggleExpanded}>Show More</button>
            )}
        </div>
        </Typography>
        <Typography variant="body2" className= "cardcontent-page-down">
        <div>Minimum Experience</div>
        <span>{`${card?.minExp} year`}</span>
        </Typography>
      </CardContent>
      <CardActions className='cardcontent-page-down-content'>
        <Button className='cardcontent-page-down-content-button' size="small">Easy Apply</Button>
      </CardActions>
    </Card>
  );
}
