import React, { useState } from "react";
import { Link } from "react-router-dom";

const genres = ["스릴러", "로맨스", "코믹", "액션"];

const InputPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState(genres[0]);
  const [releaseDate, setReleaseDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // useHistory 훅을 이용하여 라우팅 처리
  //const history = useHistory();

  const handleAddMovie = () => {
    const newMovie = {
      id: Date.now(),
      title,
      genre,
      releaseDate,
      endDate,
    };

    // MainPage로부터 전달받은 상태 업데이트 함수를 호출하여 영화 추가
    //addMovie(newMovie);

    // 영화 추가 후 MainPage로 이동
    //history.push("/main");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">영화 추가 페이지</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium">
            영화 제목
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block font-medium">
            장르
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full border rounded-md py-2 px-3"
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="releaseDate" className="block font-medium">
            개봉일
          </label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate.toISOString().split("T")[0]}
            onChange={(e) => setReleaseDate(new Date(e.target.value))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block font-medium">
            상영 종료일
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate.toISOString().split("T")[0]}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMovie}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          영화 추가하기
        </button>
        <Link to="/main" className="ml-4 text-blue-500">
          목록으로 돌아가기
        </Link>
      </form>
    </div>
  );
};

export default InputPage;
