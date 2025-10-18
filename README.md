# Game Explorer App

## Project Overview

Game Explorer is a React web application that allows users to search for video games, view detailed information about each game, and manage a list of favorite games.  
The app uses the RAWG Video Games Database API and features a clean, responsive interface built with Tailwind CSS.  
It also supports dark mode and a mobile-friendly hamburger menu for easy navigation.

---

## Features

### Core Features

- Search for games by title using the RAWG API
- View detailed game information such as description, release date, rating, genre, and developer
- Add and remove favorite games (saved using localStorage)
- Responsive design that adapts to both desktop and mobile devices
- Dark Mode toggle
- Hamburger menu for mobile users
- Loading and error states for better user experience

### Stretch Features (Future Improvements)

- User reviews and ratings
- Pagination or infinite scroll
- Screenshots and video trailers
- Recommendations engine
- Wishlist or backlog feature
- User authentication
- Database-powered favorites

---

## How It Works

1. The user enters a game title in the search bar.
2. The app fetches data from the RAWG API and displays results in a grid layout.
3. Clicking a game opens its details page, showing more information.
4. Users can add or remove games from their favorites list.
5. Favorites are stored locally using `localStorage`, so they remain even after a page refresh.

---

## Tech Stack

| Tools
|----------------
| React (Vite)
| Tailwind CSS for Styling and responsiveness
| RAWG API - Game data source
| localStorage to save favorites locally
| Lucide React Icons for visual icons (light/dark mode, menu)
| Git & GitHub - Version control
| Vercel - Deployment platform

---

## Component Structure

App
├─ Header / NavBar
│  ├─ Logo / App Name
│  ├─ Navigation Links (Home, Favorites, About)
│  ├─ Dark Mode Toggle
│  └─ Hamburger Menu (mobile only)
├─ GameList (renders GameCard components)
│  └─ GameCard (cover, title, release date, favorite toggle)
├─ GameDetails (displays extended info)
├─ FavoritesList (shows saved games)
└─ About Page (project details)

---

## Development Timeline

| Week                     | Task                                                      | Status      |
| ------------------------ | --------------------------------------------------------- | ----------- |
| Week 1 – Planning        | Defined project idea, tested RAWG API                     | Completed   |
| Week 2 – Design          | Created wireframes, chose colors and fonts                | Completed   |
| Week 3 – UI Components   | Built NavBar, SearchBar, GameCard, and layouts            | Completed   |
| Week 4 – API Integration | Connected to RAWG API, added favorites                    | Completed   |
| Week 5 – Polish & Deploy | Added dark mode, hamburger menu, preparing for deployment | In Progress |

---

## How to Run the Project Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ALX-FE-Capstone-Project.git
   ```

Navigate to the project folder

cd ALX-FE-Capstone-Project

Install dependencies

npm install

Create a .env file and add your RAWG API key

VITE_RAWG_API_KEY=your_api_key_here

Start the development server

npm run dev

Open the app in your browser at

http://localhost:5173

## Lessons Learned

Fetching and displaying data from an external API using React hooks (useEffect, useState)

Managing persistent data using localStorage

Applying Tailwind CSS for layout and responsiveness

Implementing dark mode using document class toggles

Structuring React components for clarity and reusability

Handling loading and error states effectively

## Author

Michael Akinyemi
Student - ALX Frontend Development Course

## Project Status

Core features completed.
Final polish and deployment in progress.
