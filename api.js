import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchAveragePrice = (ticker, minutes) =>
  API.get(`/stocks/${ticker}?minutes=${minutes}&aggregation=average`);

export const fetchStockCorrelation = (tickers, minutes) =>
  API.get(`/stockcorrelation`, {
    params: { ticker: tickers, minutes },
    paramsSerializer: params =>
      `minutes=${params.minutes}&ticker=${params.ticker.join('&ticker=')}`
  });
