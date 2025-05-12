import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockAverage from './components/StockAverage';
import StockCorrelation from './components/StockCorrelation';
import { AppBar, Toolbar, Button, Container } from '@mui/material';


//here the the code i typed is for app that has the makeup component to enhance the app 



function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Average</Button>
          <Button color="inherit" component={Link} to="/correlation">Correlation</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<StockAverage />} />
          <Route path="/correlation" element={<StockCorrelation />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
