import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { fetchStockCorrelation } from '../api';

const StockCorrelation = () => {
  const [tickers, setTickers] = useState(['', '']);
  const [minutes, setMinutes] = useState(10);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetchStockCorrelation(tickers, minutes);
      setResult(res.data);
    } catch {
      alert('Error fetching correlation');
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h5">Stock Correlation</Typography>
      <TextField label="Ticker 1" value={tickers[0]} onChange={e => setTickers([e.target.value, tickers[1]])} sx={{ m: 1 }} />
      <TextField label="Ticker 2" value={tickers[1]} onChange={e => setTickers([tickers[0], e.target.value])} sx={{ m: 1 }} />
      <TextField label="Minutes" type="number" value={minutes} onChange={e => setMinutes(e.target.value)} sx={{ m: 1 }} />
      <Button variant="contained" onClick={handleSubmit}>Fetch Correlation</Button>

      {result && (
        <Box mt={2}>
          <Typography>Correlation: {result.correlation}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default StockCorrelation;  // here export the stock correlation 
