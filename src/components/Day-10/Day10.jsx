import { useState } from "react";
import { useQuery } from "react-query";
import { Key } from "../../hide";

let myKey = Key;

function Day10() {
  const [inputMovie, setInputMovie] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", { inputMovie }],
    queryFn: async (params) => {
      if (!inputMovie) return;
      if (inputMovie.length > 3) {
        let res = await fetch(
          `http://www.omdbapi.com/?apikey=${myKey}&s=${inputMovie}`
        );
        return await res.json();
      }
    },
  });
  console.log(data);
  return (
    <div className="bg-[grey]">
      <div className="search text-center">
        <input
          value={inputMovie}
          onChange={(e) => setInputMovie(e.target.value)}
          type="text"
          className="border text-[2rem] inline-block "
        />
        {/* <button className="border">Search</button> */}
      </div>
      <div className="movie-grid">
        {isLoading && <div>........Loading</div>}
        {data && data.Search
          ? data.Search.map((movie) => {
              return (
                <div
                  key={movie.imdbID}
                  className="flex flex-col text-[2rem] justify-center items-center"
                >
                  <li className="list-none">
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                  <h1>{movie.Title}</h1>
                </div>
              );
            })
          : inputMovie.length > 3 && <div>Movie not found</div>}
      </div>
    </div>
  );
}

export default Day10;
