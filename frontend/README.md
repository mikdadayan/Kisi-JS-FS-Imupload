# Kisi Frontend Task - Simple Demo Application

This frontend application is a very basic React app designed to demonstrate the usage of our backend API.

[🚀 Live Demo] (https://master--spontaneous-biscuit-5d8a1e.netlify.app/)

## Setup and Running

To get started with the application, follow these steps:

1. **Clone Repository**: Run `git clone git@github.com:mikdadayan/Kisi-JS-FS-Imupload.git` to clone the repository.
2. **Change Directory**: Run `cd ./frontend` to move in frontend.
3. **Install Dependencies**: Run `npm install` to install all required dependencies.
4. **Add environment**: In the frontend root directory add `.env` file and copy the content from the `.env.local`.
5. **Environment Variables**: There's a `REACT_APP_KISI_BACKEND_API` in `.env` file, make sure it refers to where you have the backend running.
6. **Start the Application**: Run `npm start` to start the development server.
7. **Access the Application**: Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Possible Improvements

- **Styling**: The application uses very basic JSS styling without focusing on aesthetics.
- **Error Handling**: The error handling is minimal, mainly focusing on demonstrating API interactions.
- **Authentication**: The authentication process is simplified, relying on the `profile_id` provided in the headers.
