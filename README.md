# Home Address NFT Generator

This web application generates NFT (Non-Fungible Token) details based on a selected home address. It utilizes React and Material-UI for the frontend components.

## Features

- Enter a home address and get real-time suggestions.
- Fetch geolocation data using the OpenCage Geocoding API.
- Display the address location on an interactive map.
- Generate NFT details with a token URI based on the selected address.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/home-address-nft-generator.git
    ```

2. **Navigate into the directory:**

    ```bash
    cd home-address-nft-generator
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add your OpenCage Geocoding API key:

    ```env
    REACT_APP_OPENCAGE_API_KEY=your_api_key_here
    ```

5. **Start the development server:**

    ```bash
    npm start
    ```

6. **Open your browser:**

    Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

1. Enter a home address in the input field.
2. Select a suggested address from the dropdown list.
3. The map will display the location of the selected address.
4. NFT details will be generated with a token URI based on the selected address.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React UI framework for designing consistent UI components.
- **Axios**: Promise-based HTTP client for making requests to API endpoints.
- **Leaflet**: JavaScript library for interactive maps.
- **react-leaflet**: React components for Leaflet maps.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
