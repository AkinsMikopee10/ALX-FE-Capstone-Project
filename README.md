# Game Explorer App

## Project Overview

Game Explorer is a React web application that allows users to search for video games, view detailed information about each one, and save favorite games locally.
It uses the RAWG Video Games Database API and is built with React and Tailwind CSS.
The app includes dark mode support and a hamburger menu for easy mobile navigation.

## Core Features

Search games by title using the RAWG API

View detailed game information (description, release date, rating, genre, etc.)

Add and remove favorites using localStorage

Responsive layout that works on both desktop and mobile

Dark Mode toggle

Mobile hamburger menu for easier navigation

Loading and error messages during API requests

## Stretch Features (Future Updates)

User reviews and ratings

Pagination or infinite scroll

Screenshots and trailers

Game recommendations

Wishlist feature

User authentication

Database storage for favorites

## How It Works

User types a game title in the search bar.

The app fetches results from the RAWG API and displays them in a grid.

Clicking a game opens its details page.

User can add or remove games from the favorites list.

Favorites are saved locally and remain even after refresh.

## Tech Used

React (Vite)

Tailwind CSS

RAWG API

localStorage

Git & GitHub

Vercel (for deployment)

## Components Overview

Header – Includes links, dark mode toggle, and hamburger menu

SearchBar – Allows users to search for games

GameList – Displays list of games from the API

GameCard – Shows individual game info

GameDetails – Displays extended details for a selected game

FavoritesList – Shows saved favorite games

About Page – Contains project details

## Development Progress

Week 1: Project idea and API testing – Completed

Week 2: Design setup and styling choices – Completed

Week 3: UI components built – Completed

Week 4: API integration and favorites feature – Completed

Week 5: Added dark mode and hamburger menu – Completed

## Running the Project

Clone this repository

git clone <https://github.com/AkinsMikopee10/alx-fe-capstone-project.git>

Move into the project folder

cd alx-fe-capstone-project

Install dependencies

npm install

Create a .env file and add your RAWG API key

VITE_RAWG_API_KEY=your_api_key_here

Start the development server

npm run dev

Visit the app in your browser

<http://localhost:5173>

## Lessons Learned

How to use React hooks (useState, useEffect) for API calls

How to manage and store data using localStorage

Styling layouts with Tailwind CSS

Implementing dark mode and responsive design

Handling errors and loading states in API-based apps

## Author

Michael Akinyemi

Student - ALX Frontend Web Development Course
