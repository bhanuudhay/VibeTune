import React, { useState } from "react";
import { getSongsByMood } from "./YoutubeService";

const MoodPlaylist = () => {
  const [mood, setMood] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  const handleFetchSongs = async () => {
    if (!mood) return;

    try {
      // Fetch the songs based on the selected mood
      const tracks = await getSongsByMood(mood, 20); // Fetch more than 5 songs if needed
      console.log("Fetched Tracks:", tracks); // Log the response to verify its structure

      // If tracks is a valid array and has more than 0 items, update the state
      if (Array.isArray(tracks) && tracks.length > 0) {
        setSongs(tracks);
        setError(""); // Clear any previous error
      } else {
        throw new Error("No valid songs found.");
      }
    } catch (err) {
      setError("Error fetching songs. Please try again.");
      console.error("Error fetching songs:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Select a Mood</h2>
      <select onChange={(e) => setMood(e.target.value)} value={mood}>
        <option value="">Select Mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="relaxed">Relaxed</option>
      </select>
      <button onClick={handleFetchSongs} style={{ marginLeft: "10px" }}>
        Get Songs
      </button>

      {/* Display Error Message if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display the list of songs */}
      {songs.length > 0 && (
        <div>
          <h3>Recommended Songs</h3>
          <ul>
            {songs.map((song) => (
              <li key={song.id.videoId}>
                <span>{song.snippet.title}</span> -{" "}
                <a
                  href={`https://www.youtube.com/watch?v=${song.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoodPlaylist;
