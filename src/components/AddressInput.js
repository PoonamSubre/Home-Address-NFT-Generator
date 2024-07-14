import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Box from '@mui/material/Box';

const AddressInput = ({ onSelectAddress }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (query) => {
    if (!query) return [];
    setLoading(true);
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: query,
          key: '0f0ab68b25374ba99fe0ec2d3c673077',
          limit: 5,
        },
      });
      return response.data.results.map((result) => result.formatted);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = async (event, newValue) => {
    setInputValue(newValue);
    if (newValue) {
      const results = await fetchSuggestions(newValue);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Box sx={{ mt: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Autocomplete
        freeSolo
        options={suggestions}
        onInputChange={handleInputChange}
        onChange={(event, newValue) => onSelectAddress(newValue)}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Box sx={{ fontSize: '13px', textAlign: 'center', width: '100%',height: '300px' }}>
                Enter your home address here...
              </Box>
            }
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: { textAlign: 'center', fontSize: '18px', padding: '5px 5px' },
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        sx={{ width: '100%' }}
      />
    </Box>
  );
};

export default AddressInput;
