# Blog Post Application

## Overview

This application is a simple blog post platform built with the MERN stack (MongoDB, Express, React, Node.js). Users can create, view, delete, and like posts. Authentication is handled using JWT tokens, ensuring that only authenticated users can create, delete, or like posts.

## Project Structure

- **Backend**: Node.js and Express handle the API routes and MongoDB for data storage.
- **Frontend**: React is used for the user interface.
- **Authentication**: JWT tokens are used to secure certain routes.

## Key Features

1. **View Posts**: Fetch and display all blog posts.
2. **Create Post**: Authenticated users can create new blog posts.
3. **Delete Post**: Authenticated users can delete their own posts.
4. **Like Post**: Authenticated users can like posts.

## Approach

### Backend

1. **API Routes**: Defined routes for CRUD operations on blog posts.
2. **Controllers**: Handlers for each route to interact with the MongoDB database.
3. **Middleware**: Implemented JWT token verification middleware to protect certain routes.
4. **Error Handling**: Centralized error handling to ensure consistent error responses.

### Frontend

1. **Components**: Created reusable components for displaying posts and creating new posts.
2. **State Management**: Used React hooks (`useState`, `useEffect`) and Redux for state management.
3. **API Integration**: Integrated frontend with backend APIs for data fetching and manipulation.
4. **Conditional Rendering**: Displayed certain components and functionality only for authenticated users.

### Challenges Faced

1. **Database Connection Issues**: Ensuring a stable connection to MongoDB and handling connection errors gracefully.
2. **Error Handling**: Consistently managing errors across the application, particularly in asynchronous operations.
3. **Frontend-Backend Integration**: Ensuring seamless communication between the frontend and backend, especially with handling JWT tokens for authentication.
4. **Route Protection**: Implementing and testing middleware to protect routes and ensure that only authenticated users can perform certain actions.

### Testing

1. **Manual Testing**: 
   - Tested all API endpoints using Postman to ensure correct responses.
   - Verified database operations directly in MongoDB.
   - Manually tested the frontend by interacting with the application through the browser.
2. **Console Logs**: Used console logs extensively to debug and verify that data is being fetched, created, and deleted correctly.
3. **Browser Developer Tools**: Monitored network requests and checked for errors in the console to ensure correct API integration.

## How to Run

1. **Backend**:
   - Navigate to the root directory: `mern-blog`
   - Install dependencies: `npm install`
   - Create a `.env` file and add your MongoDB connection string and JWT secret.
   - Start the server: `npm run dev`

2. **Frontend**:
   - Navigate to the frontend directory: `cd client`
   - Install dependencies: `npm install`
   - Start the development server: `npm run dev`
