# Weather App

A simple and intuitive weather application that fetches real-time weather data based on the user's current location or a manually entered location.

## Live Demo

You can explore the live version of the app here: [Weather App](https://weather-app-six-alpha-46.vercel.app/)

## Features

- **Location-Based Weather**: On load, the app requests permission to access your current location and fetches weather data for that area.
- **Manual Location Input**: If location access is denied or unavailable, users can manually input a location (city or region) to view weather details for that specific place.
- **Real-Time Weather Information**: The app displays real-time weather data, including temperature, humidity, and other key weather metrics for any location.

## How It Works

1. **Automatic Location Detection**:
   - Upon opening the app, a prompt appears asking for permission to access your current location.
   - If granted, the app will automatically retrieve weather information for your area.

2. **Manual Location Input**:
   - If location access is denied, the user can manually input any location (e.g., city name) to get weather details for that place.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript

- **Backend/API**: 
  - The app fetches data from a third-party weather API to provide real-time weather information.

- **Deployment**: 
  - The app is deployed using [Vercel](https://vercel.com).

## Installation & Setup

If you want to run the app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git

2. **Navigate to the project directory**:

   ```bash
   cd weather-app

3. **Install dependencies**:

   ```bash
    npm install
   
4. **Start the development server**:

   ```bash
    npm start
5. **Open your browser and visit http://localhost:3000 to view the app.**

## Contribution
- Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or have suggestions for new features.

## License
- This project is licensed under the MIT License. See the LICENSE file for more details.
