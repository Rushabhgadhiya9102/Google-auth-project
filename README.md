# Realtyr - Real Estate Platform

Realtyr is a modern real estate platform that connects users with exclusive real estate opportunities. It provides a seamless way to explore, and invest in properties that match your goals, offering features like advanced property search and real-time market insights.

## Demo

You can access a live demo of the application here: [Live Demo](https://auth-project-a8716.web.app/)

## Features

*   **Google Authentication**: Securely sign in using your Google account.
*   **Property Listings**: Browse through featured properties with details like name, address, and images.
*   **Advanced Property Search**: Easily find properties based on location, price, size, and amenities with intuitive search filters (conceptual, not fully implemented in provided code).
*   **Real-Time Market Insights**: Get up-to-date market trends, property values, and investment insights to make informed decisions (conceptual, not fully implemented in provided code).
*   **Responsive Design**: A user-friendly interface that adapts to various screen sizes.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Redux Toolkit**: For efficient state management.
*   **Firebase Authentication**: For secure user authentication (Google Sign-In).
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **React Icons**: For easily including popular icons in the project.

## Installation and Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd realtyr
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Firebase:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/).
    *   Create a new Firebase project.
    *   Add a new web app to your project.
    *   Copy your Firebase configuration.
    *   Create a file named `.env` in the root of your project and add your Firebase configuration as environment variables. For example:

        ```
        VITE_FIREBASE_API_KEY="YOUR_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_APP_ID"
        ```
        *(Note: The provided `firebaseConfig` in `/src/firebase/config.js` already contains these values, but for a production environment, it's best practice to use environment variables.)*

4.  **Enable Google Sign-In in Firebase:**
    *   In the Firebase Console, navigate to "Authentication" -> "Sign-in method".
    *   Enable the "Google" provider.

5.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

*   `src/app/store.js`: Redux store configuration.
*   `src/assets/`: Contains static assets like images and SVGs.
*   `src/components/`: Reusable React components (e.g., `Header.jsx`).
*   `src/features/auth/`: Redux slice, thunks, and related logic for authentication.
    *   `authSlice.js`: Defines the authentication state and reducers.
    *   `authThunk.js`: Contains asynchronous actions for Google login and logout.
*   `src/firebase/config.js`: Firebase initialization and configuration.
*   `src/pages/`: Contains main application pages (e.g., `Login.jsx`, `HomePage.jsx`).
*   `src/App.jsx`: Main application component.
*   `src/main.jsx`: Entry point of the React application.

## Usage

1.  **Login Page**: Upon launching the application, you will be presented with a login page.
2.  **Sign in with Google**: Click the "Sign in with Google" button to authenticate.
3.  **Home Page**: After successful login, you will be redirected to the home page, displaying featured properties and an "About Us" section.
4.  **Logout**: Click the logout icon in the header to sign out.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
