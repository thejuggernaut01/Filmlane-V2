import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { AuthContext } from "../store/AuthContext";
import AuthLoader from "../Layout/UI/AuthLoader";
import { Context } from "../store/context";

const UploadMovie = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDesc, setMovieDesc] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [duration, setDuration] = useState("");
  const [quality, setQuality] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [cost, setCost] = useState("");
  const [pg, setPG] = useState("");
  const [movieDate, setMovieDate] = useState("");

  const [load, setLoad] = useState(false);
  const { email } = useContext(Context);
  const userID = email && email.userID;

  const moviesCollection = collection(db, "Movies");
  const navigate = useNavigate("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userID) {
      // Upload image to fire-storage
      try {
        setLoad(true);
        if (movieImage === "") return;
        const randomFilename = Math.random().toString(36).substring(2);
        const imageRef = ref(storage, `images/${movieImage + randomFilename}`);
        await uploadBytes(imageRef, movieImage);

        // retrieve image from fire-storage
        const item = await getDownloadURL(imageRef);
        // add events to the eventsCollection
        await addDoc(moviesCollection, {
          movieTitle,
          movieDesc,
          movieImage: item,
          duration,
          quality,
          year,
          rating,
          genre,
          cost,
          pg,
          movieDate: movieDate.split("T").join(" "),
          movieId: movieTitle.split(" ").join("-").toLowerCase(),
        });

        navigate("/movies");
      } catch (error) {
        console.log(error);
      }
      setLoad(false);
      setMovieTitle("");
      setMovieDesc("");
      setMovieImage("");
      setDuration("");
      setQuality("");
      setYear("");
      setRating("");
      setGenre("");
      setCost("");
      setPG("");
      setMovieDate("");
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      <section className="mt-2 text-white">
        <div className="xs:w-[85%] md:w-[75%] lg:w-[60%] mx-auto ">
          <h2 className="text-3xl font-bold text-center">Upload Movie</h2>
          {/* <hr className="my-2 text-yellow-200" /> */}

          <form onSubmit={submitHandler} action="" className="mb-8 space-y-3">
            {/* Movie Titile */}
            <div className="space-y-2">
              <label htmlFor="movieTitle" className="text-xl font-bold">
                Movie Title <span className="inline-block text-red-700">*</span>
              </label>
              <input
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                type="text"
                id="movieTitle"
                name="movieTitle"
                className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                placeholder="Movie Name"
                required
              />
            </div>

            {/* Movie Description */}
            <div className="space-y-2">
              <label htmlFor="movieDescription" className="text-xl font-bold">
                Movie Description{" "}
                <span className="inline-block text-red-700">*</span>
              </label>
              <textarea
                value={movieDesc}
                onChange={(e) => setMovieDesc(e.target.value)}
                name="movieDesctiption"
                id="movieDesctiption"
                className="h-[7rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md w-full text-black pl-2 outline-none"
                required
                placeholder="Movie Description"
              ></textarea>
            </div>

            {/* Movie Image */}
            <div className="flex flex-col ">
              <label htmlFor="image" className="drop-container">
                <span className="drop-title">
                  Drop files here{" "}
                  <span className="inline-block text-red-700">*</span>
                </span>
                or
                <input
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(event) => {
                    setMovieImage(event.target.files[0]);
                  }}
                  required
                />
                <p className="text-xs">Choose a .jpg, .png, .jpeg</p>
              </label>
            </div>

            {/* Cost, PG, DateTime */}
            <div className="justify-between gap-10 px-3 pb-1 xs:space-y-2 md:space-y-0 md:flex">
              <div>
                <label htmlFor="duration" className="text-xl font-bold">
                  Cost <span className="inline-block text-red-700">*</span>
                </label>
                <input
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  type="number"
                  className="h-[2rem]  placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                  placeholder="Cost (N)"
                  required
                />
              </div>

              <div>
                <label htmlFor="quality" className="text-xl font-bold">
                  PG <span className="inline-block text-red-700">*</span>
                </label>
                <select
                  name="PG"
                  value={pg}
                  onChange={(e) => setPG(e.target.value)}
                  id="PG"
                  className="px-3 py-1 text-black bg-white border border-white border-solid rounded-lg outline-white"
                  required
                >
                  <option className="text-black" value="13">
                    13
                  </option>
                  <option className="text-black" value="18+">
                    18+
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="duration" className="text-xl font-bold">
                  Date & Time{" "}
                  <span className="inline-block text-red-700">*</span>
                </label>
                <input
                  value={movieDate}
                  onChange={(e) => setMovieDate(e.target.value)}
                  type="datetime-local"
                  className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                  placeholder="Duration (mins)"
                  required
                />
              </div>
            </div>

            {/* Duration, Quality, Year, Rating */}
            <div className="justify-between gap-10 px-3 pb-1 xs:space-y-2 md:space-y-0 md:flex">
              <div>
                <label htmlFor="duration" className="text-xl font-bold">
                  Duration <span className="inline-block text-red-700">*</span>
                </label>
                <input
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  type="number"
                  className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                  placeholder="Duration (mins)"
                  required
                />
              </div>

              <div>
                <label htmlFor="quality" className="text-xl font-bold">
                  Quality <span className="inline-block text-red-700">*</span>
                </label>
                <select
                  name="Quality"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  id="quality"
                  className="px-3 py-1 text-black bg-white border border-white border-solid rounded-lg outline-white"
                  required
                >
                  <option className="text-black" value="HD">
                    HD
                  </option>
                  <option className="text-black" value="2K">
                    2K
                  </option>
                  <option className="text-black" value="4K">
                    4K
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="duration" className="text-xl font-bold">
                  Year <span className="inline-block text-red-700">*</span>
                </label>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="number"
                  className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                  placeholder="Year"
                  required
                />
              </div>

              <div>
                <label htmlFor="duration" className="text-xl font-bold">
                  Rating <span className="inline-block text-red-700">*</span>
                </label>
                <input
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  type="number"
                  className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                  placeholder="Rating"
                  required
                />
              </div>
            </div>

            <div className="px-3 space-y-2">
              <label htmlFor="movieTitle" className="text-xl font-bold">
                Genre <span className="inline-block text-red-700">*</span>
              </label>
              <input
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                type="text"
                id="movieTitle"
                name="movieTitle"
                className="h-[2rem] placeholder:pl-3 placeholder:text-base placeholder:italic border rounded-md text-black pl-2 outline-none"
                placeholder="Genre"
                required
              />
            </div>

            <div className="text-center">
              <button
                disabled=""
                className="w-full px-4 py-3 text-white bg-blue-900 border border-blue-900 rounded-lg"
              >
                {load ? <AuthLoader /> : "Upload"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadMovie;
