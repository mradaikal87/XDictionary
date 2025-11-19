import { useState } from "react";
import "./App.css";

const content = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  {
    word: "Component",
    meaning: "A reusable building block in React.",
  },
  {
    word: "State",
    meaning: "An object that stores data for a component.",
  },
];

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    if (!word.trim()) {
      setDefinition("Word not found in the dictionary.");
      return;
    }

    const found = content.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>

      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            marginRight: "10px",
            border: "1px solid #ccc",
          }}
        />

        <button onClick={handleSearch} style={{ padding: "8px 15px" }}>
          Search
        </button>
      </div>

      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;
