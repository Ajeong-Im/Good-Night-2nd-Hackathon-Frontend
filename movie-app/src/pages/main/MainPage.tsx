import React, { useState } from "react";
import { Link } from "react-router-dom";

const moviesData = [
  {
    id: 1,
    title: "영화 제목 1",
    genre: "액션",
    releaseDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 2,
    title: "영화 제목 2",
    genre: "로맨스",
    releaseDate: new Date(),
    endDate: new Date(),
  },
  // ... (다른 영화 데이터)
];

const MainPage: React.FC = () => {
  const [movies, setMovies] = useState(moviesData);

  const addMovie = (newMovie: any) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id: number) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">영화 목록 페이지</h1>
      <Link to="/input">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
          영화 추가하기
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
            <p className="mb-2">장르: {movie.genre}</p>
            <p className="mb-2">개봉일: {movie.releaseDate.toDateString()}</p>
            <p className="mb-2">상영 종료일: {movie.endDate.toDateString()}</p>
            <Link
              to={`/detail/${movie.id}`}
              className="text-blue-500 hover:underline"
            >
              상세 정보
            </Link>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleDeleteMovie(movie.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
