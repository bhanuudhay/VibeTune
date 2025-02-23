# VibeTune

VibeTune is a mood-based music recommendation app that helps users discover music based on their current mood. With just a few clicks, users can select a mood and get a list of songs related to that mood, powered by **YouTube's Data API**. It's a perfect way to enhance your mood with music, whether you're feeling happy, sad, or relaxed.

## Features

- **Mood-Based Song Suggestions**: Choose your mood (Happy, Sad, Relaxed) and get a list of recommended songs that match the mood.
- **YouTube Integration**: Fetches song data directly from YouTube based on search terms related to mood.
- **Randomized Songs**: Every time a mood is selected, new songs are recommended, providing a fresh experience every time.
- **Responsive Design**: A user-friendly and intuitive interface for a seamless experience on both desktop and mobile devices.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Technologies Used](#technologies-used)
3. [How It Works](#how-it-works)
4. [API Integration](#api-integration)
5. [Running the App](#running-the-app)
6. [Known Issues](#known-issues)
7. [Future Enhancements](#future-enhancements)

---

## Project Setup

To start using or contributing to the VibeTune project, follow the steps below to set it up locally.

### 1. Clone the Repository
Clone the repository to your local machine by downloading it directly from GitHub.

### 2. Install Dependencies
In the project directory, you will need to install the necessary dependencies to run the app. All dependencies are listed in the `package.json` file, and they will be installed when you open the project in your editor and follow the setup instructions in your environment.

### 3. Configure Your YouTube API Key
VibeTune requires a YouTube Data API key to fetch song data. To get an API key:
- Go to the Google Cloud Console (https://console.cloud.google.com/).
- Create a new project or select an existing one.
- Enable the **YouTube Data API v3**.
- Go to the "Credentials" section and create a new API key.

After you get your API key, add it to the environment configuration so the app can authenticate with YouTube's servers. 

You can set up the key in a `.env` file located at the root of your project with the following variable:


### 4. Start the Development Server
Once you have all the dependencies installed and your API key configured, you can start the development server to run the app locally.

---

## Technologies Used

- **React**: The app is built with React for handling user interactions and managing the state.
- **YouTube Data API v3**: Fetches music recommendations based on mood.
- **CSS**: For styling the app and ensuring it’s mobile-friendly and responsive.

---

## How It Works

### Mood-Based Music Fetching
When the user selects a mood from a dropdown list (such as "Happy", "Sad", or "Relaxed"), the app sends a request to the YouTube Data API with a relevant query based on the selected mood.

For example:
- If the user selects "Happy," the query will be related to upbeat music.
- If the user selects "Sad," the app searches for sad songs.

Once the request is made, YouTube returns a list of videos matching the query. These videos are then displayed in the app, where the user can click on a song to open the video directly on YouTube.

### Randomized Song List
Each time a user selects a mood, the app fetches a new set of songs. This ensures the user gets a fresh experience every time, without repeating the same songs.

---

## API Integration

The app utilizes the **YouTube Data API** to fetch video details based on a search query. Here's how the integration works:

### Request Structure
- The request is sent to the following YouTube API endpoint:


# Future Enhancements for VibeTune

VibeTune has room to grow, and here are five exciting features that can be added to enhance the user experience:

## 1. **Additional Mood Options**

Expand the available moods to provide users with more diverse music experiences. Some potential new moods could include:

- **Energetic**: For high-energy tracks perfect for workouts or intense moments.
- **Motivated**: Music to keep users focused, ideal for studying or working.
- **Romantic**: Create a playlist for a relaxed, romantic vibe.

Adding more mood options would allow for a more tailored music selection for users.

## 2. **User Playlists**

Allow users to create and save their own playlists based on mood preferences. Key features could include:

- **Custom Playlists**: Users can combine songs from different moods and create their own personalized playlist.
- **Playlist Sharing**: Enable users to share their playlists with friends or on social media.

This feature would increase user engagement by making the app more interactive and personal.

## 3. **Advanced Song Filtering**

Improve the song selection process by adding advanced filters, such as:

- **Artist Filter**: Let users filter songs by specific artists (e.g., Arijit Singh, Diljit Dosanjh).
- **Genre Filter**: Add a filter for specific genres like Pop, Rock, or Classical.
- **Language Filter**: Allow users to select songs by their preferred language.

This would provide a more customizable music experience for users.

## 4. **Mobile App Version**

Develop a native mobile app for VibeTune to provide a more seamless experience, including:

- **Offline Mode**: Allow users to save playlists for offline listening.
- **Push Notifications**: Notify users about new songs or updates to their favorite playlists.
- **Voice Control**: Integrate voice commands to select moods and play songs without manual input.

A dedicated mobile app would make it more accessible and user-friendly.

## 5. **Personalized Music Recommendations**

Incorporate machine learning algorithms to suggest music based on user preferences, such as:

- **User Listening History**: Recommend songs based on previously played tracks or saved favorites.
- **Behavioral Data**: Use mood preferences to suggest new music based on past selections.

Personalized recommendations would make the app feel smarter and more intuitive over time.

---

These enhancements would significantly improve VibeTune's functionality, making it a more engaging and tailored music discovery platform for users.
