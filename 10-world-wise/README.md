# WorldWise - Trip Bookmarking App

WorldWise is a React application that helps travelers track and bookmark their trips around the world. Users can mark cities they've visited on an interactive map, add notes about their experiences, and organize trips by countries and cities.

![WorldWise App Screenshot](screenshot.png)

## Features

- Interactive world map for selecting visited locations
- Organize trips by countries and cities
- Add personal notes and dates to each visited location
- User authentication system
- Responsive design for desktop and mobile devices

## Tech Stack

- **React 19** - Latest version with improved performance
- **React Router** - For seamless navigation between app sections
- **CSS Modules** - For component-scoped styling
- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **Context API** - For global state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/world-wise.git
cd world-wise
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
world-wise/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React Context providers
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and CSS modules
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
