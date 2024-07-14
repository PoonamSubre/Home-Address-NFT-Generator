import React, { useState } from 'react';
import AddressInput from './components/AddressInput';
import MapDisplay from './components/MapDisplay';
import GenerateNFT from './components/GenerateNFT';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState('');

  return (
    <Container className='home' style={{ backgroundColor: '#E5E4E2', padding: '25px', maxWidth: '100%', height: '100vh', overflow: 'auto' }}>
      <Box mt={1} mb={2}>
        <Paper elevation={3} style={{ padding: '10px' }}>
          <Typography variant="h6" gutterBottom>
            <b style={{ color: '#4CAF50' }}>Home Address NFT Generator</b>
          </Typography>
          <AddressInput onSelectAddress={setSelectedAddress} />
        </Paper>
      </Box>
      <Box mt={2} mb={2}>
        <MapDisplay address={selectedAddress} />
      </Box>
      <Box mt={2} mb={2}>
        <GenerateNFT address={selectedAddress} />
      </Box>
    </Container>
  );
};

export default App;
