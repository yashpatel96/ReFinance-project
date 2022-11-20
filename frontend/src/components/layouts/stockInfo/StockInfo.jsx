import * as React from 'react';
import { Box, Divider, ListItemText, ListItem, List, Typography } from '@mui/material';
//import info from './info'



const StockInfo = ({stockData}) => { //{stockData}
  //const stockData = info[0].data.result

  //const ytdWeekHigh = '52WeekHigh';
  const stockInfoDataName = [
    { "name": "Year Range", "func": `${stockData['52WeekLow']} - ${stockData['52WeekHigh']}` }, // : (52WeekHigh) - (52WeekLow)
    { "name": "Market Cap", "func": stockData['marketCapitalization'] }, // marketCapitalization
    { "name": "AVG Volume", "func": stockData['10DayAverageTradingVolume'] }, // 10DayAverageTradingVolume
    { "name": "P/E Ratio", "func": stockData['peNormalizedAnnual']}, // peNormalizedAnnual
    { "name": "Dividend", "func": `${stockData['dividendPerShareAnnual']} (${stockData['dividendPerShareAnnual']}%)` }, // dividendPerShareAnnual (dividendyieldIndicatedAnnual)
    { "name": "Relative to S&P 500 (YTD)", "func": stockData['priceRelativeToS&P500Ytd'] }, // priceRelativeToS&P500Ytd
  ];

  return (
    <Box sx={{ ml: 0.7, mr: 3, mt: -3, boxShadow: 3, borderRadius: 3, width: '100%', minHeight: 250, minWidth: 220, maxWidth: 360, }}>
      <List>
      <Typography variant='h6' sx={{ ml: 2, mb: -1, fontWeight: "bold" }}>Stock Info: </Typography>
      {stockInfoDataName.map((info) => (
        <div key={info.name}>
          <ListItem sx={{my: 0, ml: 0.3}}>
          <ListItemText sx={{display:"flex", m: 0}} disableTypography 
          primary={
            <>
              <Typography variant="caption" sx={{flex: 1, fontWeight: 'bold', color:'grey.700'}}>{info.name}: &nbsp;</Typography>
              <Typography variant="caption" sx={{ mr: 0.7, fontWeight: 'bold', color:'grey.700'}}>{info.func}</Typography>
            </>
          } />
          </ListItem>
          <Divider variant="middle" component="li" />
        </div>
          ))
          }
        {/* <ListItem>
          <ListItemText primary="Photos" />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary="Work" />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary="Vacation" /> {/* secondary="July 20, 2014" *}
        </ListItem> */}
      </List>
    </Box>
  );
}

export default StockInfo

/* 
<ListItemAvatar>
  <Avatar>
    <BeachAccessIcon />
  </Avatar>
</ListItemAvatar>
*/