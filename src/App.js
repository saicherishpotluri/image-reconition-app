import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const surpriseOptions = [
    "Does this image have a ball?",
    "Is this image red in color?",
    "Is this Johnny Liver?",
  ];

  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
    console.log("random: ", randomValue);
  };

  //Upload method, to save the image
  const uploadImage = async (e) => {
    setImage(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImage(e.target.files[0]);

    try {
      const options = {
        method: "POST",
        body: formData,
      };
      const response = await fetch("http://localhost:8000/upload", options);
      const data = response.json();
      console.log("Data: ", data);
    } catch (err) {
      console.log(err);
      setError("Something didn't work! please try again.");
    }
  };

  const analyzeImage = async () => {
    if (!image) {
      setError("Must have an existing image!");
      return;
    }
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
      setResponse(data);
    } catch (err) {
      console.log(err);
      setError("Something didn't work! please try again.");
    }
  };

  const clear = () => {
    setImage(null);
    setValue("");
    setResponse("");
    setError("");
  };

  return (
    <div className="App">
      <section className="search-section">
        <div className="image-container">
          {image && (
            <img src={URL.createObjectURL(image)} alt="Uploaded Preview" />
          )}
        </div>
        <p className="extra-info">
          <span>
            <label htmlFor="files"><u>Upload</u> an image </label>
            <input
              onChange={uploadImage}
              id="files"
              accept="image/*"
              type="file"
              hidden
            />
          </span>
          to ask questions about.
        </p>
        <p>
          What do you want to know about image?
          <button className="surprise" onClick={surprise} disabled={response}>
            Surprise me!
          </button>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="What is in the image..."
            onChange={(e) => setValue(e.target.value)}
          ></input>
          {!response && !error && (
            <button onClick={analyzeImage}>Ask me</button>
          )}
          {(response || error) && <button onClick={clear}>Clear</button>}
        </div>
        {error && <p>{error}</p>}
        {response && <p>{response}</p>}
      </section>
    </div>
  );
}

export default App;
