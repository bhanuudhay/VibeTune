const YOUTUBE_API_KEY = "AIzaSyDnQesm5qY7RoSvjH537LNp0WjxkHVjpmw"; // Replace with your YouTube API key

export const getSongsByMood = async (mood, limit = 5) => {
  try {
    // Define keywords for moods
    const moodKeywords = {
      happy: "upbeat music",
      sad: "sad songs",
      relaxed: "chill music",
    };

    // Get the query based on the selected mood
    const query = moodKeywords[mood] || "music"; // Default to 'music' if mood is not found

    // Construct the API URL with mood-based query
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=${limit}&key=${YOUTUBE_API_KEY}`;

    // Log the request URL
    console.log("Requesting URL:", url);

    // Fetch from YouTube API
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Error fetching data from YouTube API");
    }

    // Parse the JSON response
    const data = await response.json();

    // Log the full API response for debugging
    console.log("Fetched YouTube API Data:", data);

    // Check if data.items exists and return it
    if (data.items && Array.isArray(data.items)) {
      return data.items;
    } else {
      throw new Error("No valid items in the response.");
    }
  } catch (error) {
    console.error("Error fetching songs from YouTube:", error);
    return []; // Return empty array if there's an error
  }
};
