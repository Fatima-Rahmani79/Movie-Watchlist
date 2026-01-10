import { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const GENRES = [
  "Drama",
  "Action",
  "Adventure",
  "animation",
  "Comedy",
  "Horror",
  "Other"
];

export default function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  function submit() {
    setError("");

    const cleanTitle = title.trim();

    if (!cleanTitle) return setError("Movie Name is required.");

    onAddMovie({ title: cleanTitle });

    setTitle("");
    setGenre("");
  }

  return (
    <section className="addMovie card">
      <h2 className="title">Add New Movie</h2>

      <div className="addMovieItemsContainer">
        <TextInput
          label="Movie Name"
          value={title}
          onChange={setTitle}
          placeholder={"Movie Tiltle (e.g. 12 Angry Men"}
        />
        <SelectInput
          label="Genre"
          value={genre}
          onChange={setGenre}
          options={GENRES}
        ></SelectInput>

        <button className="btn primary" onClick={submit}>
          Add
        </button>

        {error ? <p className="error">{error}</p> : null}
      </div>
    </section>
  );
}
