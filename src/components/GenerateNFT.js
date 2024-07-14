import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './GenerateNFT.css';

const GenerateNFT = ({ address }) => {
  const generateTokenURI = () => {
    const baseURI = 'https://api.example.com/nft/';
    const tokenID = '12345';
    const tokenURI = `${baseURI}${tokenID}?address=${encodeURIComponent(address)}`;
    return tokenURI;
  };

  return (
    <Card variant="outlined" className="nft-card">
      <CardContent>
        <Typography variant="h7" className="nft-title"><b>NFT Details</b></Typography>
        {address && (
          <>
            <Typography variant="body1" className="nft-address">Selected Address: {address}</Typography>
            <Typography variant="body1" className="nft-token-uri">
              Token URI: <Link href={generateTokenURI()} target="_blank" rel="noopener noreferrer" className="nft-link">{generateTokenURI()}</Link>
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GenerateNFT;
