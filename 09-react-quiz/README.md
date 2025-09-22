# React Quiz Application

A dynamic quiz application built with React that tests your knowledge of React concepts. The app features multiple-choice questions, score tracking, a timer, and high score functionality.

## Features

- Interactive quiz interface with multiple-choice questions
- Real-time score tracking
- Timer for each question
- High score tracking
- Progress indicator
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v18.3 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the JSON server (mock API):

   ```
   npm run server
   ```

   This will start a fake REST API server on port 3000 that serves the quiz questions.

2. In a separate terminal, start the development server:

   ```
   npm run dev
   ```

   This will start the Vite development server.

3. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## How to Play

1. Click "Let's Start" on the welcome screen
2. Read each question carefully and select your answer
3. Your score will update based on correct answers
4. A timer counts down for the entire quiz
5. After answering all questions, you'll see your final score and high score
6. Click "Restart Quiz" to play again

## Tech Stack

- React 19
- Vite
- JSON Server (for mock API)
- CSS for styling

## Project Structure

- `src/components/` - React components
- `src/data/` - Quiz questions data
- `src/assets/` - Static assets like images

## Development

- Run `npm run dev` for development with hot module replacement
- Run `npm run build` to create a production build
- Run `npm run preview` to preview the production build locally

## License

This project is licensed under the MIT License.
