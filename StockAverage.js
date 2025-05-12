import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { fetchAveragePrice } from '../api';


//so now we are going to take the stock exchange and fetch the data accorcingly and the box should return the ticker value and at last the avg price of the stock 


const StockAverage = () => {
  const [ticker, setTicker] = useState('');
  const [minutes, setMinutes] = useState(10);
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetchAveragePrice(ticker, minutes); //avg price of the fetching which store in res 
      setData(res.data);
    } catch {
      alert('Error fetching average');
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h5">Stock Average Price</Typography>
      <TextField label="Ticker" value={ticker} onChange={e => setTicker(e.target.value)} sx={{ m: 1 }} />
      <TextField label="Minutes" type="number" value={minutes} onChange={e => setMinutes(e.target.value)} sx={{ m: 1 }} />
      <Button variant="contained" onClick={handleSubmit}>Fetch Average</Button>

      {data && (
        <Box mt={2}>
          <Typography>Average Price: ${data.averageStockPrice.toFixed(2)}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default StockAverage;
