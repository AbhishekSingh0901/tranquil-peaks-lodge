# The Tranquil Peaks

A comprehensive full-stack application that seamlessly combines Subapase as the backend, ReactJS for the frontend, and various modern technologies to create an efficient hotel management system. The app is specifically designed for ease of use and effectivemanagement, with features such as employee authentication, dynamic data handling, and a polished
user interface.

## Installation

1. Clone the repo
2. Run `npm install` to install dependencies
3. Rename and configure `.env` if needed

## Usage

- Run `npm run dev` to launch development server
- Open your browser at `http://localhost:5713`

## Project Structure

- `/src/pages` holds page components
- `/src/ui` houses shared UI elements
- `/src/context` for global state: ##Handling dark and light mode##
- `/src/features`: contains modules for each major feature (authentication, bookings, cabins, check-in-out, dashboard, settings).
- `/src/hooks` contains global hooks
- `/src/services` conatins all supbase services
- `/src/data` holds all the demo data
- `/src/utils` contains utility functions

## Tools Used

- Supabase for backend
- React, React Router, and React Query for frontend
- React Hot Toast for notifications
- Styled Components for styling

## Supabase Services

- Authentication: Handles user signups, logins, and session management through Supabase Auth.
- Database: Manages and queries data in tables like bookings, cabins, and settings.
- Storage: Uploads and manages user files (e.g., avatars, cabin images).

## React Router

The project uses React Router for client-side routing:

- Different URL paths load corresponding pages (Dashboard, Bookings, Cabins, etc.).
- Protected routes are managed to ensure only authenticated users access certain areas.

### Routes and URLs

- /dashboard : Displays the main dashboard
- /bookings : Shows a list of bookings
- /bookings/:bookingId : Fetches details for a single booking
- /checkin/:bookingId : Form to check in a guest
- /cabins : Manages cabins
- /users : Manages user information
- /settings : Configures application settings
- /account : Shows the current user’s account info
- /login : Public route for authentication

### Protected Routing

All routes except /login are wrapped in a ProtectedRoute component, ensuring only authenticated users can access them.
